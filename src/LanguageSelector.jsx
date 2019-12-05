import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactFlagsSelect from 'react-flags-select';
import { setLanguage } from './actions';
import 'react-flags-select/css/react-flags-select.css';

class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.flagSelector = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    const { language } = nextProps;
    this.flagSelector.current.updateSelected(language.toUpperCase());
  }

  onSelectLanguage = (countryCode) => {
    const { setLanguage } = this.props;
    const language = countryCode.toLowerCase();
    setLanguage(language);
  }

  render() {
    return (
      <ReactFlagsSelect
        ref={this.flagSelector}
        disabled={false}
        selectedSize={16}
        optionsSize={16}
        defaultCountry="US"
        showSelectedLabel={false}
        alignOptions="left"
        countries={['US', 'PT', 'ES', 'DE', 'FR']}
        customLabels={{
          US: 'English',
          PT: 'Português',
          ES: 'Español',
          DE: 'Deutsch',
          FR: 'Français',
        }}
        onSelect={this.onSelectLanguage}
      />
    );
  }
}

const mapStateToProps = state => ({
  language: state.content.language,
});

const mapDispatchToProps = dispatch => ({
  setLanguage: language => dispatch(setLanguage(language)),
});

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
