import styled from 'styled-components';

export const FormContact = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
  padding: ${p => p.theme.space[2]};
  margin-bottom: ${p => p.theme.space[4]};
`;

export const FormLabel = styled.label`
  margin-right: ${p => p.theme.space[3]};
`;

export const FormInput = styled.input`
  margin-bottom: ${p => p.theme.space[4]};
`;

// export const FormButton = styled.button``;
