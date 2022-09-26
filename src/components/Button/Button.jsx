import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

export default function Button({ type, text }) {
  return (
    <>
      <Btn type={type}>{text}</Btn>
    </>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
