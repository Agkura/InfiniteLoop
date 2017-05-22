json.extract! @answer, :id, :body
json.authorId @answer.author_id
json.questionId @answer.question_id
json.createdAt @answer.created_at.strftime('%F %T')
json.username @answer.author.username
