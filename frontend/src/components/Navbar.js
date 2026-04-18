import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>
        FoodApp 🍔
      </h2>

      <div>
        <button className="btn" onClick={() => navigate('/cart')}>
          Cart 🛒
        </button>

        <button className="btn" onClick={() => navigate('/orders')}>
          Orders
        </button>

        <button
          className="btn"
          onClick={() => {
            localStorage.removeItem('token');
            navigate('/');
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;