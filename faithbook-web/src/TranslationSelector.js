import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import connectionHandler from './ConnectionHandler';
import { setActiveTranslation, setTranslations } from './actions';

class TraSelector extends Component {
	constructor(props){
		super(props);
		this.state = {
			openOptions: false,
		}

		this.toggleOptions = this.toggleOptions.bind(this);
		this.closeOptions = this.closeOptions.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.translationsAreAvailable = this.translationsAreAvailable.bind(this);
	}

	toggleOptions() {
		!this.state.disabled && this.setState({
			openOptions: !this.state.openOptions
		});
	}

	toggleOptionsWithKeyboard(evt) {
		evt.preventDefault();
		if (evt.keyCode === 13) {
			//enter key: toggle options
			this.toggleOptions();
		} else if (evt.keyCode === 27) {
			//esc key: hide options
			!this.state.disabled && this.setState({
				openOptions: false
			});
		}

	}

	closeOptions(event) {
		if (event.target !== this.refs.selectedFlag && event.target !== this.refs.flagOptions && event.target !== this.refs.filterText ) {
			this.setState({
				openOptions: false
			});
		}
	}

	onSelect(translation) {
		this.props.setActiveTranslation(translation)
	}

	updateSelected(translation) {
		this.setState({
			selected: translation
		})
	}

	componentDidMount() {
		!this.props.disabled && window.addEventListener("click", this.closeOptions);
	}

	translationsAreAvailable(translations) {
		this.setState({...this.state, translations: translations});
		this.props.setTranslation(translations[0]);
	}

	componentWillMount() {
		connectionHandler.fetchTranslationsFromServer(this.props.language, this.translationsAreAvailable);
	}

	componentWillReceiveProps(nextProps) {
    let { language } = nextProps;
    if (language !== this.props.language) {
      connectionHandler.fetchTranslationsFromServer(language, this.translationsAreAvailable);
    }
  }

	componentWillUnmount() {
		!this.props.disabled && window.removeEventListener("click", this.closeOptions);
	}

	render() {

		let isSelected = this.state.selected || this.state.defaultCountry;
		let selectedSize = this.props.selectedSize;
		let optionsSize = this.props.optionsSize;
		let alignClass = this.props.alignOptions.toLowerCase() === 'left' ? 'to--left' : '';

		return (
			<div className={`flag-select ${this.props.className ? this.props.className :  ""}`}>
				<div ref="selectedFlag" style={{fontSize: `${selectedSize}px`}} className={`selected--flag--option ${this.props.disabled ? 'no--focus' : ''}`} tabIndex="0" onClick={this.toggleOptions} onKeyUp={evt => this.toggleOptionsWithKeyboard(evt)}>
					{isSelected &&
						<span className="country-flag" style={{width: `${selectedSize}px`, height: `${selectedSize}px`}} >
							{this.props.showSelectedLabel &&
								<span className="country-label">{ this.props.translation }</span>
							}
						</span>
					}

					{!isSelected &&
						<span className="country-label">{this.props.translation.abbreviation}</span>
					}
					<span className={`arrow-down ${this.props.disabled ? 'hidden' : ''}`}>▾</span>
				</div>

				{this.state.openOptions &&
					<div ref="flagOptions" style={{fontSize: `${optionsSize}px`}} className={`flag-options ${alignClass}`}>
						{(this.props.translations).map( translation =>
							<div className={`flag-option ${this.props.showOptionLabel ? 'has-label' : ''}`} key={translation.abbreviation} tabIndex="0" onClick={() => this.onSelect(translation)}>
								<span className="country-flag" style={{width: `${optionsSize}px`, height: `${optionsSize}px`}} >
									<span className="country-label">{ translation.abbreviation + ' - ' + translation.nativeName }</span>
								</span>
							</div>
						)}
					</div>
				}
			</div>
		)
	}
}

TraSelector.defaultProps = {
	selectedSize: 16,
	optionsSize: 16,
	placeholder: "Select a country",
	showSelectedLabel: true,
	showOptionLabel: true,
	alignOptions: "left",
	customLabels: {},
	disabled: false,
}

TraSelector.propTypes = {
	selectedSize: PropTypes.number,
	optionsSize: PropTypes.number,
	defaultCountry: PropTypes.string,
	placeholder: PropTypes.string,
	showSelectedLabel: PropTypes.bool,
	showOptionLabel: PropTypes.bool,
	alignOptions: PropTypes.string,
	onSelect: PropTypes.func,
	disabled: PropTypes.bool,
}

const mapStateToProps = state => ({
  language: state.content.language,
  translation: state.content.translation,
	translations: state.content.translations,
});

const mapDispatchToProps = dispatch => ({
  setActiveTranslation: (translation) => dispatch(setActiveTranslation(translation)),
	setTranslations: (translations) => dispatch(setTranslations(translations)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TraSelector);
