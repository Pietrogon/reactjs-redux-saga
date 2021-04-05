const API_URL = 'http://localhost:8080/api/auth/';

const login = (username: string, password: string) => {
  return fetch(API_URL + 'signin', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then(async (response) => {
    const data = await response.json();
    if (data.accessToken) {
      localStorage.setItem('user', JSON.stringify(data));
    }

    return data;
  });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  login,
  logout,
};
