import styled, { css } from 'styled-components';

const Input = styled.input`
  color: var(--blue);
  font-size: 1em;
  width: calc(100% - 10px);
  border: 0px solid #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin: 5px;
  background: ${(props) => props.theme.background};
`;

Input.defaultProps = {
  theme: {
    background: css`#ffffff;`,
  },
};

export default Input;
