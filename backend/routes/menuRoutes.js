
const router = require('express').Router();

const {
  addMenuItem,
  getMenu,
} = require('../controllers/menuController');

router.post('/', addMenuItem);
router.get('/:id', getMenu);

module.exports = router;
