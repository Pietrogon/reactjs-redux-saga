import styled from 'styled-components';

const Button = styled.button`
  color: var(--blue);
  background: var(--secondary);
  font-size: 1em;
  width: calc(100% - 10px);
  border: 0px solid #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin: 5px;
  border: 1px solid var(--blue);

  &:focus {
    border: 1px solid var(--blue);
  }

  &:hover {
    background: var(--primary);
    color: var(--light);
  }
`;

export default Button;
