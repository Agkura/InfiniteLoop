const _nullUser = ({
  currentUser: null,
  errors: [],
  userQuestions: []
});

const SessionReducer = ( state = _nullUser, action ) => {
  switch(action.type){
    default:
      return state;
  }
}

export default SessionReducer;
