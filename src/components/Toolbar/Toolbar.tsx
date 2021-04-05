import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../Menu/Menu';
import { StyledToolbar, TitleToolbar, User } from './Styled';

type ToolbarProps = {
  title: string;
};

function Toolbar({ title }: ToolbarProps) {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <StyledToolbar>
      <Menu></Menu>
      <TitleToolbar>{title}</TitleToolbar>
      <User>Usuário: {user.username}</User>
    </StyledToolbar>
  );
}

export default Toolbar;
