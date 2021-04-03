import styled from 'styled-components';

export const StyledMenu = styled.div`
  height: 100%;
  max-height: 100%;
  width: 350px !important;
  box-shadow: 0px 0px 36px #00000066;
  background: var(--light);
  position: absolute;
  transition: opacity 0.2s ease-in-out;

  h2 {
    padding: 10px 20px;
    text-align: initial;
    color: var(--light);
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    height: calc(100% - 118px);

    a {
      width: 100%;
      font-size: 1.2rem;
      border-radius: 2px;
      padding: 20px 30px;
      border-bottom: 1px solid #0000001f;
      transition: 0.2s ease-in-out;

      &:hover {
        background: var(--gray-light);
      }
    }
  }

  visibility: ${(props) => props.theme.visibility};
  opacity: ${(props) => props.theme.opacity};
`;

StyledMenu.defaultProps = {
  theme: {
    visibility: 'hidden',
    opacity: '0',
  },
};

export const DivButton = styled.div`
  height: 100%;
  width: calc(100% - 350px);
  position: absolute;
  margin-left: 350px;
  z-index: 999;
  background: #0000003b;
  transition: opacity 0.2s ease-in-out;

  visibility: ${(props) => props.theme.visibility};
  opacity: ${(props) => props.theme.opacity};
`;

DivButton.defaultProps = {
  theme: {
    visibility: 'hidden',
    opacity: '0',
  },
};

export const ButtonMenu = styled.button`
  background: transparent;
  padding-left: 15px;
  padding-right: 12px;
  border: none;
  position: absolute;
  height: 60px;

  .icon {
    color: var(--light);
    width: 30px;
    height: 30px;
  }
`;

export const ButtonClose = styled.button`
  background: transparent;
  margin-left: 20px;
  margin-right: 20px;
  border: none;
  height: 47px;
  min-width: 47px;
  border-radius: 25px;
  color: var(--light);
  transition: 0.2s ease-in-out;

  &:hover {
    color: #bb1c1cb5;
  }

  .icon {
    width: 30px;
    height: 30px;
  }
`;

export const StyledMenuHeader = styled.div`
  display: flex;
  padding: 35px 0px;
  border-bottom: 1px solid #00000063;
  background: var(--primary);
  box-shadow: 0px 0px 36px #00000066;
`;
