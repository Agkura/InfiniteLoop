json.extract! @question, :id, :title, :body
json.created_at @question.created_at.strftime('%F %T')
json.authorId @question.author_id
json.username current_user.username
