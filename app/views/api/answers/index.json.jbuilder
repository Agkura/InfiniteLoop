@answers.each do |answer|
  json.set! answer.id do
    json.extract! answer, :id, :body
    json.authorId answer.author_id
    json.questionId answer.question_id
    json.createdAt answer.created_at.strftime('%F %T')
    json.username answer.author.username
    count = answer.vote_count
    if count == nil
      count = 0
    end
    json.votes count
    score = 0
    if current_user
      answer.votes.each { |v| score = v.status if v.author_id == current_user.id }
    end
    if current_user && answer.votes.map{ |vote| vote.author_id }.include?( current_user.id )
      voted =  true
    else
      voted = false
    end
    json.voted voted
    json.voteStatus score
  end
end
