import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import Navbar from '../components/Navbar';
import { CartContext } from '../context/CartContext';

function Menu() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    API.get(`/menu/${id}`)
      .then((res) => setMenu(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="grid">
        {menu.map((item) => (
          <div key={item.id} className="card">
            <img
              src="https://picsum.photos/400/300"
              alt="food"
            />

            <div className="card-body">
              <h3>{item.item_name}</h3>
              <p>₹{item.price}</p>

              <button
                className="btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Menu;