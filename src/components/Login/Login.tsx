import React, { useState } from 'react';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Title from '../../shared/Title';
import Input from '../../shared/Input';
import { Form } from './Styled';
import { useDispatch } from 'react-redux';
import authService from '../../services/auth.service';
import { LOGIN_FAIL, LOGIN_SUCCESS } from '../../actions/types';
import { Redirect } from 'react-router-dom';

export function Login(props: any) {
  let username = '';
  let password = '';
  const dispatch = useDispatch();
  const [rpath, setRPath] = useState('');

  const onChangeUsername = (event: any) => {
    username = event.target.value;
  };

  const onChangePassword = (event: any) => {
    password = event.target.value;
  };

  function submit() {
    authService.login(username, password).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
        setRPath('/projects');
      },
      () => {
        dispatch({
          type: LOGIN_FAIL,
          payload: null,
        });
      }
    );
  }

  if (rpath) {
    return <Redirect to={rpath} />;
  }

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input
          onChange={onChangeUsername}
          name="username"
          type="text"
          placeholder="Usuário:"
        ></Input>
        <Input
          onChange={onChangePassword}
          name="password"
          type="password"
          placeholder="Senha:"
        ></Input>
        <Button onClick={submit}>Entrar</Button>
      </Form>
    </Container>
  );
}

export default Login;
