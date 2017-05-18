export const fetchQuestions = () => {
  return (
    $.ajax({
      url: "/api/questions"
    })
  )
}
