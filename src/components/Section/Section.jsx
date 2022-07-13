import propTypes from 'prop-types';
import { Box } from '../Box';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <Box mt={3} mx="auto" py={3} maxWidth={2} as="section">
    <Title>{title}</Title>
    {children}
  </Box>
);

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.element.isRequired,
};
