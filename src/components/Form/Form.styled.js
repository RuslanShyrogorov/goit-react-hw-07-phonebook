import styled from 'styled-components';

// export const FormContact = styled.form`
//   width: 400px;
//   display: flex;
//   flex-direction: column;

//   border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
//   padding: ${p => p.theme.space[2]};
//   margin-bottom: ${p => p.theme.space[4]}px;
// `;

export const FormLabel = styled.label`
  margin-bottom: ${p => p.theme.space[1]}px;
`;

export const FormInput = styled.input`
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.space[7]}px;
  /* max-width: ${p => p.theme.space[7]}px; */
  color: ${p => p.theme.colors.white};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 250ms ease-in-out, box-shadow 250ms ease-in-out;

  :hover {
    background-color: ${p => p.theme.colors.accent};
    box-shadow: ${p => p.theme.shadows.btn};
    cursor: pointer;
  }
`;
