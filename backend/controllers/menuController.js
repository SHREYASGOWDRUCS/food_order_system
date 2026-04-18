
const pool = require('../config/db');

exports.addMenuItem = async (req, res) => {
  const { restaurant_id, item_name, price } = req.body;

  const item = await pool.query(
    'INSERT INTO menu (restaurant_id,item_name,price) VALUES ($1,$2,$3) RETURNING *',
    [restaurant_id, item_name, price]
  );

  res.json(item.rows[0]);
};

exports.getMenu = async (req, res) => {
  const { id } = req.params;

  const data = await pool.query(
    'SELECT * FROM menu WHERE restaurant_id=$1',
    [id]
  );

  res.json(data.rows);
};
