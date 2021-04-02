import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Title from '../../shared/Title';
import Input from '../../shared/Input';
import { Form } from './Styled';

function Login() {
  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input type="text" placeholder="E-mail:"></Input>
        <Input type="password" placeholder="Senha:"></Input>
        <Link to="/Projects">
          <Button>Entrar</Button>
        </Link>
      </Form>
    </Container>
  );
}

export default Login;
