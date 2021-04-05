import React, { useState, FunctionComponent } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { LOGOUT } from '../../actions/types';
import authService from '../../services/auth.service';
import Title from '../../shared/Title';
import {
  ButtonClose,
  ButtonMenu,
  DivButton,
  StyledMenu,
  StyledMenuHeader,
} from './Styled';

const Menu: FunctionComponent<{}> = ({ children }) => {
  const [display, setDisplay] = useState('hidden');
  const [opacity, setOpacity] = useState('0');
  const dispatch = useDispatch();

  const showMenu = () => {
    setDisplay('visible');
    setOpacity('1');
  };

  const hideMenuWithTime = () => {
    setOpacity('0');
    setTimeout(() => setDisplay('hidden'), 200);
  };

  const hideMenu = () => {
    setOpacity('0');
    setDisplay('hidden');
  };

  const logout = () => {
    authService.logout();
    dispatch({
      type: LOGOUT,
      payload: null,
    });
  };

  return (
    <>
      <DivButton
        theme={{
          visibility: display,
          opacity: opacity,
        }}
        onClick={() => hideMenuWithTime()}
      ></DivButton>
      <ButtonMenu onClick={() => showMenu()}>
        <AiOutlineMenu className="icon"></AiOutlineMenu>
      </ButtonMenu>
      <StyledMenu
        theme={{
          visibility: display,
          opacity: opacity,
        }}
      >
        <StyledMenuHeader>
          <Title>Menu</Title>
          <ButtonClose onClick={() => hideMenuWithTime()}>
            <AiOutlineClose className="icon"></AiOutlineClose>
          </ButtonClose>
        </StyledMenuHeader>
        <div onClick={() => hideMenu()}>
          <Link to="/Projects">Projetos</Link>
          <Link to="/Appointments">Apontamentos</Link>
          <Link onClick={logout} to="/">
            Sair
          </Link>
        </div>
      </StyledMenu>
    </>
  );
};

export default Menu;
