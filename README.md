# InfiniteLoop
[InfiniteLoop][infinite] is a single-page web application built to extract the core functionality of sites such as [StackOverflow][stack], from which it is inspired, in a minimalistic manner.

![root web page](/docs/images/fullpage.png)

InfiniteLoop was constructed within a ten day time-frame with the intent on being spartan and intuitive.

![interaction demo](/docs/images/interaction.png)

## Features

* User Authentication
* Pose questions and corresponding answers
* Search
* Upvote / downvote community
* Limited State

#### *User Authentication*
InfiniteLoop utilizes secure authentication with mandatory session token resets during all aspects of login and logout.  Passwords are secured with salted hashes without storing the unencrypted version.

#### *Questions and Answers*
In order to maintain the integrity of the community, InfiniteLoop requires login when posing questions and providing answers.  The question form is persistent across all pages, replacing the session form, for constant availability.

Editing and deleting of questions and answers trigger a `react-modal` for quick edits.

![edit-dropdown-demo](/docs/images/edit-dropdown.png)

Answering questions is limited to one answer per user and no option for the original question author to answer their own question.  Questions down to upvotes/downvotes are `dependent: :destroy` leaving no opportunity for orphaned answers and votes.

### *Search*
The search bar creates a new tab upon completion and returns all questions that have relevant content across the title, body content and/or answers.

#### *Upvote and Downvote*
The ability to upvote and downvote answers and questions brings attention to the merits and/or lack of usefulness for answers while creating awareness for more intriguing questions.  The trending section is not based off of the attached vote score:

![trending-snap-shot](/docs/images/close-index.png)

Instead, InfiniteLoop considers questions with higher answer counts, in essence higher interaction quality, as more important:

```Ruby
def trending
    @questions = Question.includes( :author, :question_votes )
                         .joins( :answers )
                         .select('questions.*, count(answers) as answer_count')
                         .group( :id )
                         .order('answer_count desc')
                         .offset( params[:offset] )
                         .limit( 20 )
  render :index
end
```
The current iteration of InfiniteLoop utilizes separate tables and associations for votes applying to questions and answers.  The following iteration will use polymorphic associations which will be especially useful in conjunction with a third and fourth table for replies.


### The Stack
InfiniteLoop was realized within a limited time frame and thus built with speed and functionality in mind.  It implements Ruby on Rails, backed by PostgreSql, with `react/redux` incorporating `react-router` for streamlined single-page app capabilities.  The modular capabilities of react/redux/react-router combined allows for quick deployment as well as reliable functionality.

```javascript
  //questions index
  constructor(props){
    super(props);
    this.state = {
      page: 0,
      tabs: {
        0: {
          content: "Most Recent",
          action: this.props.requestAllQuestions
        },
        1: {
          content: "Trending",
          action: this.props.requestTrendingQuestions
        },

        //...
      }
    }
  }

  handler(tab){
    this.setState({
      tab: tab,
      page: 0
    })
  }

  //tabs index
  handleAction(dispatchAction, key, contentName){
    return ( _ ) => {
      this.setState({
        selected: key
      });

      this.props.handler(contentName);

      dispatchAction();

      if (this.props.history.location.pathname !== "/")
        {this.props.history.push("/");}
    }
  }
```

Passing a handler function to children components at will through the use of the redux `Provider` and `Connect` as well as the history manipulation from `react-router`'s `withRouter`, the tab navigation bar can remain modular yet appropriately direct and render the user experience with minimal re-renders.

#### *Limited State*
The `react` state is purposefully kept small, lightweight and normalized.  This keeps Ajax requests light and leaves the heavy-lifting to RoR and PostgreSql.  The maximum number of Questions maintained on the client-side is 20.  The answer slice was left un-capped in attempting to keep in line with the efficiency and availability mantra of the InfinteLoop user experience. You can find more information on the initial proposal, state structure and RESTful routes used:

[Initial Proposal][proposal]

### Beyond the MVP
Though the base functionality has been achieved, there are a few more important components, though not required for usability, that will need to be implemented:
* Allowing comments for both questions and answers, in order to foster discussion.
* Tags and/or categories tables for questions, in order to increase accessibility and efficiency.
* Code snippets for visibility and clarity.

[infinite]: https://shrouded-falls-24793.herokuapp.com/#/
[stack]: stackoverflow.com
[proposal]: /docs/README.md
