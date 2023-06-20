// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, onClickSuggestionArrow} = props
  const {suggestion} = suggestionItem

  const byClickSuggestionArrow = () => {
    onClickSuggestionArrow(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={byClickSuggestionArrow}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
