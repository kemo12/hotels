import { useState } from 'react';
import './Login.css';
const Login = () => {
  const [name, setName] = useState('');
  const [passWord, setPassWord] = useState('');

  return (
    <div className="loginContainer">
      <form>
        <h2>Login</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name...."
        />
        <input
          type="text"
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Enter Password...."
          value={passWord}
        />
        <button>login</button>
      </form>
    </div>
  );
};

export default Login;
