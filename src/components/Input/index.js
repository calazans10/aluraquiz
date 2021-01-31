import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 14px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
