import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/home');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <br /><br />

        <button className="btn">Login</button>
      </form>

      {/* ✅ REGISTER BUTTON */}
      <br /><br />

      <p>Don't have an account?</p>

      <button
        className="btn"
        onClick={() => navigate('/register')}
      >
        Create Account
      </button>
    </div>
  );
}

export default Login;