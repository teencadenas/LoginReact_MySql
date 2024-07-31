import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {

    e.preventDefault();

    if (!username || !password) {
      setMessage('Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/auth/register', { username, password });
      setMessage(response.data);
    } catch (error) {
      setMessage('Error registrando el usuario');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <button onClick={handleRegister}>Register</button>
      <p>{message}</p>
    </div>
  );
};

export default Register;
