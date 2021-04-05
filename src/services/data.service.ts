import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/';

const getProjects = () => {
  return fetch(API_URL + 'projects', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: authHeader(),
  });
};

const getProjectsByUser = (userId: number) => {
  return fetch(API_URL + 'projects/user/' + userId, {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
    headers: authHeader(),
  });
};

export default {
  getProjects,
  getProjectsByUser,
};
