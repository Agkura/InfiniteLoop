export const fetchAnswers = ( questionId ) => {
  return (
    $.ajax({
      url: `/api/questions/${questionId}/answers`
    })
  )
}
