// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSuggestionArrow = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filteredSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="google-Suggestions-container">
        <div className="cart-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-logo"
          />
          <div className="suggestion-item-bg-container">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
                className="search-icon"
              />
              <input
                className="input-element"
                placeholder="Search Google"
                onChange={this.onChangeInput}
                value={searchInput}
                type="search"
              />
            </div>
            <ul className="suggestion-items-container">
              {filteredSuggestionList.map(suggestion => (
                <SuggestionItem
                  suggestionItem={suggestion}
                  onClickSuggestionArrow={this.onClickSuggestionArrow}
                  key={suggestion.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
