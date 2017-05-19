export const fetchQuestions = ( offset ) => {
  return (
    $.ajax({
      url: `/api/questions`,
      data: { offset }
    })
  )
}

export const createQuestion = ( question ) => {
  return (
    $.ajax({
      url: "/api/questions",
      data: { question },
      method: "POST"
    })
  )
}

export const updateQuestion = ( question ) => {
  return (
    $.ajax({
      url: `/api/questions/${question.id}`,
      method: "PATCH",
      data: { question }
    })
  )
}

export const destroyQuestion = ( questionId ) => {
  return (
    $.ajax({
      url: `/api/questions/${questionId}`,
      method: "DELETE"
    })
  )
}

export const userQuestions = () => {
  return (
    $.ajax({
      url: '/api/questions/user_questions'
    })
  )
}
