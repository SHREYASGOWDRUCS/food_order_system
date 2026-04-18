import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import API from '../services/api';
import Navbar from '../components/Navbar';

function Cart() {
  const { cart, clearCart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const placeOrder = async () => {
    await API.post('/orders', { total_amount: total });
    alert('Order placed!');
    clearCart();
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Your Cart</h2>

        {cart.map((item, i) => (
          <div key={i} className="card">
            <h4>{item.item_name}</h4>
            <p>₹{item.price}</p>

            {/* 🔥 REMOVE BUTTON */}
            <button className="btn" onClick={() => removeFromCart(i)}>
              Remove ❌
            </button>
          </div>
        ))}

        <h3>Total: ₹{total}</h3>

        <button className="btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </>
  );
}

export default Cart;