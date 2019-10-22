import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLanguage } from './actions';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';

class LanguageSelector extends Component {
  onSelectLanguage = (countryCode) => {
    let language = countryCode.toLowerCase()
    this.props.setLanguage(language);
  }

  render() {
    return (
      <div className={null}>
        <ReactFlagsSelect
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

const mapDispatchToProps = dispatch => ({
  setLanguage: (language) => dispatch(setLanguage(language))
});

export default connect(null, mapDispatchToProps)(LanguageSelector);
