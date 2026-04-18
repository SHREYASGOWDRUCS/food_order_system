
const pool = require('../config/db');

exports.addRestaurant = async (req, res) => {
  const { name, location } = req.body;

  const data = await pool.query(
    'INSERT INTO restaurants (name, location) VALUES ($1,$2) RETURNING *',
    [name, location]
  );

  res.json(data.rows[0]);
};

exports.getRestaurants = async (req, res) => {
  const data = await pool.query('SELECT * FROM restaurants');
  res.json(data.rows);
};
