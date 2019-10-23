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
    translations: [],
    category: '',
    titles: {},
    feed: [],
  },
  action,
) => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language,
      }
    case 'SET_ACTIVE_TRANSLATION':
      return {
        ...state,
        translation: action.translation,
      }
    case 'SET_TRANSLATIONS':
      return {
        ...state,
        translations: action.translations,
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
    case 'SET_FEED':
      return {
        ...state,
        feed: action.posts,
      }
    default:
      return state;
  }
}
