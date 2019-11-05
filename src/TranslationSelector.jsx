import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setFeed } from './actions';

class TranslationSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openOptions: false,
    };
    this.selectedTranslation = React.createRef();
    this.translationOptions = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.closeOptions);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.closeOptions);
  }

  onSelect = (translation) => {
    const { setFeed, category } = this.props;
    setFeed(category, translation);
  }

  closeOptions = (event) => {
    if (
      event.target !== this.selectedTranslation.current
      && event.target !== this.translationOptions.current
    ) {
      this.setState({
        openOptions: false,
      });
    }
  }

  toggleOptions = () => {
    const { openOptions } = this.state;
    this.setState({
      openOptions: !openOptions,
    });
  }

  render() {
    const {
      selectedSize, optionsSize, translation, translations,
    } = this.props;
    const { openOptions } = this.state;

    return (
      <div className="flag-select" style={{ marginTop: '6px' }}>
        <div
          ref={this.selectedTranslation}
          style={{ fontSize: `${selectedSize}px` }}
          className="selected--flag--option"
          onClick={this.toggleOptions}
          onKeyUp={() => {}}
          role="button"
          tabIndex="0"
        >
          <span>{translation.abbreviation}</span>
          <span className="arrow-down">▾</span>
        </div>

        {
          openOptions ? (
            <div ref={this.translationOptions} style={{ fontSize: `${optionsSize}px` }} className="flag-options to--left">
              {(translations).map(translation => (
                <div
                  className="flag-option"
                  key={translation.abbreviation}
                  onClick={() => this.onSelect(translation)}
                  onKeyUp={() => {}}
                  role="button"
                  tabIndex="0"
                >
                  <span className="country-label">{ `${translation.abbreviation} - ${translation.nativeName}` }</span>
                </div>
              ))}
            </div>
          ) : <React.Fragment />
        }
      </div>
    );
  }
}

TranslationSelector.defaultProps = {
  selectedSize: 16,
  optionsSize: 16,
};

TranslationSelector.propTypes = {
  selectedSize: PropTypes.number,
  optionsSize: PropTypes.number,
  translation: PropTypes.object.isRequired,
  translations: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  setFeed: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  category: state.content.category,
  translation: state.content.translation,
  translations: state.content.translations,
});

const mapDispatchToProps = dispatch => ({
  setFeed: (category, translation) => dispatch(setFeed(category, translation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TranslationSelector);
