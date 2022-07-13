import propTypes from 'prop-types';
import { Box } from '../Box';
import { StatListItem, StatListCount } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Box as={'ul'}>
      <StatListItem>
        <p>Good: </p>
        <StatListCount>{good}</StatListCount>
      </StatListItem>
      <StatListItem>
        <p>Neutral: </p>
        <StatListCount>{neutral}</StatListCount>
      </StatListItem>
      <StatListItem>
        <p>Bad: </p>
        <StatListCount>{bad}</StatListCount>
      </StatListItem>
      <StatListItem>
        <p>Total: </p>
        <StatListCount>{total}</StatListCount>
      </StatListItem>
      <StatListItem>
        <p>Positive Feedback: </p>
        <StatListCount>{positivePercentage}%</StatListCount>
      </StatListItem>
    </Box>
  );
};

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
