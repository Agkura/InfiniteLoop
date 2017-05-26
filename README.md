# InfiniteLoop
[InfiniteLoop][infinite] is a single-page web application built to extract the core functionality of sites such as [StackOverflow][stack], from which it is inspired, in a minimalistic manner.

InfiniteLoop was meant to be constructed within a loose two-week time-frame with the intent on being spartan and intuitive.

![root web page](/docs/images/fullpage.png)

## Features

* User Authentication
* Pose questions and corresponding answers
* Upvote / downvote community

#### *User Authentication*
InfiniteLoop utilizes secure authentication with mandatory session token resets during all aspects of login and logout.  Passwords are secured with salted hashes without storing the unencrypted version.

#### *Questions and Answers*
In order to maintain the integrity of the community, InfiniteLoop requires login when posing questions and providing answers.  The question form is persistent across all pages, replacing the session form, for constant availability.

![interaction demo](/docs/images/interaction.png)




[infinite]: https://shrouded-falls-24793.herokuapp.com/#/
[stack]: stackoverflow.com
