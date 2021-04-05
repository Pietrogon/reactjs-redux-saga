import styled from 'styled-components';

export const FormAppoints = styled.div`
  margin: 20px;
  margin-top: 50px;
  text-align: left;

  h2 {
    font-weight: 200;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

  h4 {
    font-weight: 200;
    margin-bottom: 20px;
    background: var(--blue-light);
    color: var(--light);
    width: 100%;
    text-align: center;
    height: 40px;
    padding-top: 10px;
    border-radius: 20px;
  }

  input {
    margin-bottom: 20px;
  }

  label {
    width: 100%;
    text-align: left;
    padding-left: 12px;
  }

  button {
    margin-top: 20px;
  }

  div {
    width: 100%;
    text-align: center;
  }

  select {
    color: var(--blue);
    font-size: 1em;
    width: calc(100% - 10px);
    border: 0px solid #fff;
    border-radius: 1rem;
    padding: 1rem;
    margin: 5px;
    background: var(--light);
    margin-bottom: 20px;
    padding-rigth: 12px;
  }
`;
