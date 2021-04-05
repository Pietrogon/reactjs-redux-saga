import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px 16px 16px 16px;
  list-style-type: none;
  width: calc(100% - 32px);
`;

export const Item = styled.li`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
  }

  div:first-child {
    padding-top: 30px;
  }

  h2 {
    font-weight: 200;
    text-align: left;
    width: 79%;
  }

  span {
    font-weight: 800;
    text-align: center;
    width: 20%;
  }
`;

export const ListUser = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  width: 100%;
`;

export const ItemUser = styled.li`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 16px;

  div {
    padding-top: 10px !important;
  }

  h2 {
    font-size: 1.2rem;
    color: var(--blue);
  }

  span {
    font-weight: 200;
    width: calc(20%);
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #0000001f;
  width: 100%;
  height: 1px;
`;
