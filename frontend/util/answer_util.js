export const fetchAnswers = ( questionId ) => {
  return (
    $.ajax({
      url: `/api/questions/${questionId}/answers`
    })
  )
}

export const createAnswer = ( answer ) => {
  return (
    $.ajax({
      url: `/api/questions/${answer.question_id}/answers`,
      method: "POST",
      data: { answer }
    })
  )
}

export const updateAnswer = ( answer ) => {
  return (
    $.ajax({
      url: `/api/questions/${answer.question_id}/answers/${answer.id}`,
      method: "PATCH",
      data: { answer }
    })
  )
}
