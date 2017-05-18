json.extract! @answer, :id, :body
json.authorId @answer.author_id
json.questionId @answer.question_id
json.username current_user.username
