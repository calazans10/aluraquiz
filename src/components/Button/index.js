import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 10px 16px;
  transition: 0.3s;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
