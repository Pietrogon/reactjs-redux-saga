import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
  background: var(--light);
  width: 380px;
  height: 380px;
  margin: auto;
  border-radius: 2rem;
  padding: 1rem;
  border: 6px solid var(--blue);
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: var(--tertiary);
`;

const H2 = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;
`;

const Button = styled.button`
  color: var(--blue);
  background: var(--secondary);
  font-size: 1em;
  width: calc(100% - 10px);
  border: 0px solid #fff;
  border-radius: 1rem;
  padding: 1rem;
  margin: 5px;

  &:hover {
    background: var(--primary);
    color: var(--light);
  }
`;

function Login() {
  return (
    <Container>
      <Form>
        <H2>Login</H2>
        <input type="text" placeholder="E-mail:"></input>
        <input type="password" placeholder="Senha:"></input>
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;
