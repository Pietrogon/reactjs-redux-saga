import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.background};
  position: absolute;
`;

Container.defaultProps = {
  theme: {
    background: css`var(--light);`,
  },
};

export default Container;
