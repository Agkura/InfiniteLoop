export const voteAnswer = ( vote ) => {
  return (
    $.ajax({
      url: "/api/votes",
      data: { vote },
      method: 'POST'
    })
  )
}

export const changeAnswerVote = ( vote ) => {
  return (
    $.ajax({
      url: `/api/votes/${vote.id}/edit`,
      data: { vote }
    })
  )
}

export const voteQuestion = ( question_vote ) => {
  return (
    $.ajax({
      url: "/api/question_votes",
      data: { question_vote },
      method: 'POST'
    })
  )
}

export const changeQuestionVote = ( question_vote ) => {
  return (
    $.ajax({
      url: `/api/question_votes/${question_vote.id}/edit`,
      data: { question_vote }
    })
  )
}
