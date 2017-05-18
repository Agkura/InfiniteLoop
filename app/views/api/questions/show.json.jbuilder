json.extract! @question, :id, :title, :body
json.authorId @question.author_id
json.username current_user.username
