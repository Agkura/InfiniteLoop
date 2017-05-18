export const fetchQuestions = () => {
  return (
    $.ajax({
      url: "/api/questions"
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
