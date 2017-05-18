json.extract! @question, :id, :title, :body, :author_id
json.username current_user.username
