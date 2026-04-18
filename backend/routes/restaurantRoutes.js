
const router = require('express').Router();
const auth = require('../middleware/authMiddleware');

const {
  addRestaurant,
  getRestaurants,
} = require('../controllers/restaurantController');

router.post('/', auth, addRestaurant);
router.get('/', getRestaurants);

module.exports = router;
