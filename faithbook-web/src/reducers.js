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
    language: '',
    translation: {},
    category: '',
    titles: {},
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
    case 'SET_CATEGORY':
      window.scrollTo(0, 0);
      return {
        ...state,
        category: action.category,
      }
    case 'SET_TITLES':
      let titles = {};
      const entries = action.titles.forEach(entry => {
        titles[entry.key] = entry.title;
      });
      return {
        ...state,
        titles: titles,
      }
    default:
      return state;
  }
}
