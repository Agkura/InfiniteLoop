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
