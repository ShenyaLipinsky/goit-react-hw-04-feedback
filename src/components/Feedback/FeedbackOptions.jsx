import propTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(btn => {
        return (
          <Button type="button" key={btn} id={btn} onClick={onLeaveFeedback}>
            {btn}
          </Button>
        );
      })}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
