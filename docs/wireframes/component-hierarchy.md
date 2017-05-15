## Component Hierarchy

**NavBar**
 * SearchContainer
 
**QuestionIndexContainer**
 * QuestionDetail
   - NewQuestions
   - TrendingQuestions
   - UserQuestionIndexContainer
     + UserQuestionDetail
 
**AuthFormContainer**
 * AuthForm
 
**UserProfileContainer**
 * UserQuestionIndexContainer
   - UserQuestionDetail
  
**QuestionShowContainer**
 * QuestionShow
 * AnswersContainer
   - AnswerDetail
 * AnswerFormContainer
   - AnswerForm
---
## React Routes
 
|Path  | Component  |
|------|------------|
| "/" | "NavBar" |
| "/" | "QuestionIndexContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/log-in" | "AuthFormContainer" |
| "/" | "ActivityContainer" |
| "/user/:username" | "UserProfileContainer" |
| "/new" | "NewQuestions" |
| "/trending" | "TrendingQuestions" |
| "/:username" | "UserQuestionIndexContainer" |
| "/:questionId" | "QuestionShowContainer" |
| "/:questionId" | "AnswersContainer" |
| "/:questionId" | "AnswerDetail" |
| "/:questionId" | "AnswerForm" |
