export const controls = (
  state = {
    isSideBarOpen: false,
  },
  action,
) => {
  switch (action.type) {
    case 'OPEN_SIDEBAR':
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
    translation: {
      'abbreviation': 'ESV',
      'nativeName': 'English Standard Version'
    },
  },
  action,
) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language,
      }
    case 'SET_TRANSLATION':
      return {
        ...state,
        translation: action.translation,
      }
    default:
      return state;
  }
}
