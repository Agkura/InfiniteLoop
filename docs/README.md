# InfiniteLoop

[Heroku Link][na]

[StackOverflow Link][stack]

[heroku]: na
[stack]: http://stackoverflow.com/


## [MVP] Minimum Viable Product

InfiniteLoop is a web app inspired by StackOverflow built on
Ruby on Rails, PostgreSQL and React/Redux. This app will, at a minimum, satisfy the
following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Pose questions
- [ ] Answer questions
- [ ] Search for questions
- [ ] Upvote / Downvote Answer
- [ ] Production README

## Design Docs

* [View Wireframes][wireframes]
* [Reach Components][components]
* [API Endpoints][endpoints]
* [DB Schema][schema]
* [Sample State][state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[endpoints]: docs/wireframes
[schema]: docs/sample-state.md
[state]: docs/schema.md

## Implementation Timeline
### Phase 1: Backend Setup and Full User Auth ( 3 days )
**objective:** Fully functional authentication from rails to react/redux.
### Phase 2: Questions Index with Tabs ( 2 days )
**objective:** Question index containers visible across both authenticated
and un-authenticated views as well as tabs filters.
### Phase 3: Upvotes ( 2 days )
**Objective:** Upvotes functionality on Question show pages with visibility.
### Phase 4: Implement Search ( 3 days )
**objective:** Answer index visible beneath all question show pages.
### Phase 5: Profile Page for users ( 1 day )
**objective:** Filter user questions on profile pages and style accordingly
### Phase 6: Activity Container for authenticated users ( 1 day )
**objective:** Render upvotes and answered questions under activity container.
### Phase 7: CSS ( 1 day )
**objective:** Tabs and modals.
### Bonus: (TBD)
- [ ] Question Categories
- [ ] Comments on Questions/AnswersContainer
- [ ] Polymorphic Up/Down Votes: Questions/Answers/Comments
- [ ] Code snippets in Answers
