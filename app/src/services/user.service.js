import axios from 'axios';

export function userService() {
  function login(user) {
    const url = 'http://localhost:3030';
    axios
      .post(`${url}/login`, { userName: user.name, passwd: user.passwd })
      .then((resp) => {
        localStorage.setItem('user', JSON.stringify(resp.data));
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function logout() {
    localStorage.removeItem(`user`);
    window.location.reload();
  }

  return {
    login,
    logout,
  };
}
