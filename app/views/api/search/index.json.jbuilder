json.set! :questions do
  @questions.each do |question|
    json.set! question.id do
      json.extract! question, :id, :title, :body
      json.createdAt question.created_at.strftime('%F %T')
      json.authorId question.author_id
      json.username question.author.username
    end
  end
end

json.set! :answers do
  @answers.each do |answer|
    json.set! answer.id do
      json.extract! answer, :id, :body
      json.authorId answer.author_id
      json.questionId answer.question_id
      json.createdAt answer.created_at.strftime('%F %T')
      json.username answer.author.username
    end
  end
end
