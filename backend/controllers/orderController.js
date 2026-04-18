
const pool = require('../config/db');

exports.placeOrder = async (req, res) => {
  const { total_amount } = req.body;

  const order = await pool.query(
    'INSERT INTO orders (user_id,status,total_amount) VALUES ($1,$2,$3) RETURNING *',
    [req.user.id, 'Placed', total_amount]
  );

  res.json(order.rows[0]);
};

exports.getOrders = async (req, res) => {
  const orders = await pool.query(
    'SELECT * FROM orders WHERE user_id=$1',
    [req.user.id]
  );

  res.json(orders.rows);
};
