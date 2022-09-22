import React from 'react';
import { Btn } from './Button.styled';

export default function Button({ type, text }) {
  return (
    <>
      <Btn type={type}>{text}</Btn>
    </>
  );
}
