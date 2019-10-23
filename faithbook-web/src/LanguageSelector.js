import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLanguage } from './actions';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.flagSelector = React.createRef();
  }

  onSelectLanguage = (countryCode) => {
    let language = countryCode.toLowerCase()
    this.props.setLanguage(language);
  }

  componentWillReceiveProps(nextProps) {
    this.flagSelector.current.updateSelected(nextProps.language.toUpperCase());
  }

  render() {
    return (
      <div className={null}>
        <ReactFlagsSelect
          ref={this.flagSelector}
          disabled={false}
          selectedSize={16}
          optionsSize={16}
          defaultCountry="US"
          showSelectedLabel={false}
          alignOptions="left"
          countries={["US", "PT", "ES", "DE", "FR"]}
          customLabels={{
            "US": "English",
            "PT": "Português",
            "ES": "Español",
            "DE": "Deutsch",
            "FR": "Français",
          }}
          onSelect={this.onSelectLanguage}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  language: state.content.language,
});

const mapDispatchToProps = dispatch => ({
  setLanguage: (language) => dispatch(setLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
