import axios from 'axios';

const apiEndpoint = 'https://dv2dt9p1r9xgg.cloudfront.net';

export const openSideBar = () => ({
  type: 'OPEN_SIDEBAR',
});

export const closeSideBar = () => ({
  type: 'CLOSE_SIDEBAR',
});

export const fetchInitData = () => ({
  type: 'FETCH_INIT_DATA',
  payload: axios.get(`${apiEndpoint}/init`),
});

export const setLanguage = language => ({
  type: 'FETCH_INIT_LANGUAGE',
  payload: axios.get(`${apiEndpoint}/initLanguage?language=${language}`)
    .then(response => ({ response, language })),
});

export const setFeed = (category, translation) => ({
  type: 'FETCH_FEED',
  translation,
  payload: axios.get(`${apiEndpoint}/feed?category=${category}&translation=${translation.abbreviation}`)
    .then(response => ({ response, category, translation })),
});
