import React, { useState, FunctionComponent } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
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

  function showMenu() {
    setDisplay('visible');
    setOpacity('1');
  }

  function hideMenuWithTime() {
    setOpacity('0');
    setTimeout(() => setDisplay('hidden'), 200);
  }

  function hideMenu() {
    setOpacity('0');
    setDisplay('hidden');
  }

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
          <Link to="/">Login</Link>
        </div>
      </StyledMenu>
    </>
  );
};

export default Menu;
