import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      type="button"
      key={option}
      className={s.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeedbackOptions;
