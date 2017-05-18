@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :body
    json.authorId answer.author_id
    json.questionId answer.question_id
    json.username answer.author.username
  end
end
