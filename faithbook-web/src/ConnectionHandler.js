import axios from 'axios';

const backendURL = 'https://dv2dt9p1r9xgg.cloudfront.net/';

class ConnectionHandler {

  //Feed
  fetchFeedFromServer = (category, language, translation, callback) => {
    axios.get(`${backendURL}feed?category=${category}&language=${language}&translation=${translation}`)
      .then(response => {
        callback(response.data.posts);
    });
  }

  //SideBar
  fetchDisplayNamesFromServer = (language, callback) => {
    axios.get(`${backendURL}allCategories?language=${language}`)
      .then(response => {
        callback(response.data);
    });
  }

  //TranslationSelector
  fetchTranslationsFromServer = (language, callback) => {
    axios.get(`${backendURL}translations?language=${language}`)
      .then(response => {
          callback(response.data);
    });
  }
}

const connectionHandler = new ConnectionHandler();

export default connectionHandler;
