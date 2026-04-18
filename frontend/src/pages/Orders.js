
import { useEffect, useState } from 'react';
import API from '../services/api';
import Navbar from '../components/Navbar';
<Navbar />

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get('/orders').then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.map((o) => (
      <div className="card">
      <div className="card-body">
        <h4>Order #{o.id}</h4>
        <p>Status: <b>{o.status}</b></p>
        <p>Total: ₹{o.total_amount}</p>
      </div>
    </div>
      ))}
    </div>
  );
}

export default Orders;
