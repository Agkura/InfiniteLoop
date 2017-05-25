@questions.each do |question|
  json.set! question.id do
    json.extract! question, :id, :title, :body
    json.createdAt question.created_at.strftime('%F %T')
    json.authorId question.author_id
    json.username question.author.username
    count = question.vote_count
    if count == nil
      count = 0
    end
    json.votes count
    score = 0
    if current_user
      question.question_votes.each { |qv| score = qv.score if qv.author_id == current_user.id }
    end
    if current_user && question.question_votes.map{ |vote| vote.author_id }.include?( current_user.id )
      voted =  true
    else
      voted = false
    end
    json.voted voted
    json.voteScore score
  end
end
