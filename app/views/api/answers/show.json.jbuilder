json.extract! @answer, :id, :body
json.authorId @answer.author_id
json.questionId @answer.question_id
json.createdAt @answer.created_at.strftime('%F %T')
json.username @answer.author.username
count = @answer.vote_count
if count == nil
  count = 0
end
json.votes count
if current_user && @answer.votes.map{ |vote| vote.author_id }.include?( current_user.id )
  voted =  true
else
  voted = false
end
json.voted voted
score = 0
if current_user
  hold = @answer.votes.find_by(author_id: current_user.id)
  if hold
    score = hold.score
  end
end
json.voteStatus score
