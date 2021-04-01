import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.background};
`;

Container.defaultProps = {
  theme: {
    background: css`var(--tertiary);`,
  },
};

export default Container;
