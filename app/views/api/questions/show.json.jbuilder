json.extract! @question, :id, :title, :body, :created_at
json.authorId @question.author_id
json.username current_user.username
