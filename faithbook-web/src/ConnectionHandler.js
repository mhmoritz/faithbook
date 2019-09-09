

class ConnectionHandler {

  var backendURL = 'https://dv2dt9p1r9xgg.cloudfront.net/'

  //Feed
  fetchFeedFromServer = (category, language, translation) => {
    axios.get(`${backendURL}feed?category=${category}&language=${language}&translation=${translation}`)
      .then(response => {
        this.setState({posts: response.data.posts});
    });
  }

  //SideBar
  fetchDisplayNamesFromServer = (language) => {
    axios.get(`${backendURL}allCategories?language=${language}`)
      .then(response => {
        this.setState({categories: response.data});
    });
  }

  //TranslationSelector
  fetchTranslationsFromServer(language) {
    axios.get(`${backendURL}translations?language=${language}`)
      .then(response => {
        this.setState({...this.state, translations: response.data});
        this.props.setTranslation(response.data[0])
    });
  }



}
