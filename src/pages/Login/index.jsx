import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [passWord, setPassWord] = useState('');
  useEffect(() => {
    if (localStorage.getItem('isLogin') == '1') {
      navigate('/Dashboard', { replace: true });
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '' && passWord !== '') {
      if (name === '123' && passWord === '123') {
        localStorage.setItem('isLogin', '1');
        navigate('/Dashboard', { replace: true });
      }
    }
  };
  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name...."
        />
        <input
          type="password"
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Enter Password...."
          value={passWord}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
