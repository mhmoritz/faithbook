export const controls = (
  state = {
    isSideBarOpen: false,
  },
  action,
) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
      console.log("open!")
      return {
        ...state,
        isSideBarOpen: true,
      };
    case 'CLOSE_SIDEBAR':
      return {
        ...state,
        isSideBarOpen: false,
      };
    default:
      return state;
  }
};

export const content = (
  state = {
    language: 'en',
  },
  action,
) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language,
      }
    default:
      return state;
  }
}
