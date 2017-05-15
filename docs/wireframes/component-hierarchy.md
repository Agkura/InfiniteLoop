## Component Hierarchy

**NavBar**
 * SearchContainer
 
**QuestionIndexContainer**
 * QuestionDetail
 
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
| "/:username" | "UserQuestionsContainer" |
| "/:questionId" | "QuestionShowContainer" |
| "/:questionId" | "AnswersContainer" |
| "/:questionId" | "AnswerDetail" |
| "/:questionId" | "AnswerForm" |
