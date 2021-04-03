import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';

const StyledToolbar = styled.div`
  display: flex;
  height: 60px;
  background: var(--tertiary);
  box-shadow: 0px 0px 36px #00000066;
`;

type ToolbarProps = {
  title: string;
};

const Title = styled.h2`
  color: var(--light);
  padding-left: 65px;
  padding-top: 15px;
`;

function Toolbar({ title }: ToolbarProps) {
  return (
    <StyledToolbar>
      <Menu></Menu>
      <Title>{title}</Title>
    </StyledToolbar>
  );
}

export default Toolbar;
