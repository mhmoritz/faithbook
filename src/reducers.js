export const controls = (
  state = {
    isSideBarOpen: false,
    isFeedPending: true,
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
    case 'FETCH_INIT_DATA_PENDING':
      return {
        ...state,
        isFeedPending: true,
      };
    case 'FETCH_INIT_DATA_FULFILLED':
      return {
        ...state,
        isFeedPending: false,
      };
    case 'FETCH_FEED_PENDING':
      return {
        ...state,
        isFeedPending: true,
      };
    case 'FETCH_FEED_FULFILLED':
      return {
        ...state,
        isFeedPending: false,
      };
    case 'FETCH_INIT_LANGUAGE_PENDING':
      return {
        ...state,
        isFeedPending: true,
      };
    case 'FETCH_INIT_LANGUAGE_FULFILLED':
      return {
        ...state,
        isFeedPending: false,
      };
    default:
      return state;
  }
};

function convertTitles(titles) {
  const asDict = {};
  titles.forEach((entry) => {
    asDict[entry.key] = entry.title;
  });
  return asDict;
}

export const content = (
  state = {
    language: '',
    translation: { abbreviation: 'ESV' },
    translations: [],
    category: '',
    titles: {},
    feed: {},
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_INIT_DATA_FULFILLED':
      window.scrollTo(0, 0);
      return {
        ...state,
        language: action.payload.data.language,
        translations: action.payload.data.translations,
        translation: action.payload.data.translations[0],
        titles: convertTitles(action.payload.data.titles),
        feed: action.payload.data.feed,
        category: action.payload.data.feed.id,
      };
    case 'FETCH_FEED_FULFILLED':
      window.scrollTo(0, 0);
      return {
        ...state,
        category: action.payload.response.data.id,
        translation: action.payload.translation,
        feed: action.payload.response.data,
      };
    case 'FETCH_INIT_LANGUAGE_FULFILLED':
      window.scrollTo(0, 0);
      return {
        ...state,
        language: action.payload.language,
        titles: convertTitles(action.payload.response.data.titles),
        translations: action.payload.response.data.translations,
        translation: action.payload.response.data.translations[0],
        feed: action.payload.response.data.feed,
        category: action.payload.response.data.feed.id,
      };
    default:
      return state;
  }
};
