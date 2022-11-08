import styled from 'styled-components';

export const StyledSpinner = styled.div`
  /* border: 16px solid grey;
  border-top: 16px blue solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite; */

  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: ${p => p.theme.radii.round};
  width: ${p => p.theme.space[4]}px;
  height: ${p => p.theme.space[4]}px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
