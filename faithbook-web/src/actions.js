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

export const setTranslation = (translation) => ({
  type: 'SET_TRANSLATION',
  translation
});
