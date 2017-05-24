json.set! @question.id do
  json.extract! @question, :id, :title, :body
  json.createdAt @question.created_at.strftime('%F %T')
  json.authorId @question.author_id
  json.username @question.author.username
  json.votes @question.vote_count
end
