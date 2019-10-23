export const openSideBar = () => ({
  type: 'OPEN_SIDEBAR',
});

export const closeSideBar = () => ({
  type: 'CLOSE_SIDEBAR',
});

export const setLanguage = (language) => ({
  type: 'SET_LANGUAGE',
  language
});

export const setActiveTranslation = (translation) => ({
  type: 'SET_ACTIVE_TRANSLATION',
  translation
});

export const setTranslations = (translations) => ({
  type: 'SET_TRANSLATIONS',
  translations
});

export const setCategory = (category) => ({
  type: 'SET_CATEGORY',
  category
});

export const setTitles = (titles) => ({
  type: 'SET_TITLES',
  titles
});

export const setFeed = (posts) => ({
  type: 'SET_FEED',
  posts
});
