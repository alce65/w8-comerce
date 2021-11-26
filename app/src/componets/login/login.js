import { useState } from 'react';
import { userService } from '../../services/user.service';

export default function Login() {
  const [loginState, setLoginState] = useState({ name: '', passwd: '' });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    userService().login(loginState);
  };

  const handleLogout = () => {
    userService().logout();
  };

  const handleChange = (evt, control) => {
    setLoginState({ ...loginState, [control]: evt.target.value });
  };

  const template = (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="user-name">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="user-name"
          id="user-name"
          value={loginState.name}
          required
          onChange={(ev) => handleChange(ev, 'name')}
        />
      </div>
      <div className="form-group">
        <label htmlFor="user-passwd">Passwd</label>
        <input
          type="password"
          className="form-control"
          name="user-passwd"
          id="user-passwd"
          value={loginState.passwd}
          required
          onChange={(ev) => handleChange(ev, 'passwd')}
        />
      </div>
      <button type="submit">Login</button>
      <button type="reset" onClick={handleLogout}>
        Logout
      </button>
    </form>
  );
  return template;
}
