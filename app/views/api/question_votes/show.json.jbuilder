json.set! @question.id do
  json.extract! @question, :id, :title, :body
  json.createdAt @question.created_at.strftime('%F %T')
  json.authorId @question.author_id
  json.username @question.author.username
  json.votes @question.vote_count
  count = @question.vote_count
  if count == nil
    count = 0
  end
  json.votes count
  if current_user && @question.question_votes.map{ |vote| vote.author_id }.include?( current_user.id )
    voted =  true
  else
    voted = false
  end
  json.voted voted
end
