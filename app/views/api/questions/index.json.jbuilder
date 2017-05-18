@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :title, :body
    json.authorId question.author.id
    json.username question.author.username
  end
end
