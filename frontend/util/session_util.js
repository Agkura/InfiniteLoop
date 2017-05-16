export const createUser = ( user ) => {
  return (
    $.ajax({
      url: "api/users",
      method: "POST",
      data: { user }
    })
  );
};

export const fetchUser = ( id ) => {
  return (
    $.ajax({
      url: `/api/users/${id}`
    })
  );
};

export const logIn = ( user ) => {
  return (
    $.ajax({
      url: "/api/session",
      method: "POST",
      data: user
    })
  );
};

export const logOut = () => {
  return (
    $.ajax({
      url: "api/session",
      method: "DELETE"
    })
  );
};
