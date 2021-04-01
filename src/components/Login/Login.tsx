import React from 'react';
import styled from 'styled-components';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import H2 from '../../shared/H2';
import Input from '../../shared/Input';

const Form = styled.div`
  background: var(--light);
  width: 380px;
  height: 380px;
  margin: auto;
  border-radius: 2rem;
  padding: 1rem;
  border: 6px solid var(--blue);
`;

function Login() {
  return (
    <Container>
      <Form>
        <H2>Login</H2>
        <Input type="text" placeholder="E-mail:"></Input>
        <Input type="password" placeholder="Senha:"></Input>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;
