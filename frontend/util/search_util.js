export const searchQuery = ( query ) => {
  return (
    $.ajax({
      url: "/api/search",
      data: { query }
    })
  )
}
