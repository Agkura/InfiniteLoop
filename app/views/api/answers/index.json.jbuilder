@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :body
    json.authorId answer.author_id
    json.questionId answer.question_id
    json.createdAt answer.created_at.strftime('%F %T')
    json.username answer.author.username
    json.votes answer.vote_count
  end
end
