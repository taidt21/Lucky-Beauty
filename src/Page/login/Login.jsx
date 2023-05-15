import React, { useState } from 'react';

const Login = ({onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Gọi API đăng nhập và xử lý logic đăng nhập ở đây
    console.log('Đăng nhập với tên người dùng:', username, 'và mật khẩu:', password);
    onLogin(username);
  };

  return (
    <div className='login'>
      <h1>Đăng nhập</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Tên người dùng:</label>
          <input type="text" value={username} onChange={handleUsernameChange} required/>
        </div>
        <div>
          <label>Mật khẩu:</label>
          <input type="password" value={password} onChange={handlePasswordChange} required/>
        </div>
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
