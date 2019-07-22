import { wrap, error } from '../utils';
import Menu from '../models/Menu';

const router = require('express-promise-router')();

router.get(
  '/',
  wrap(async (req, res) => {
    try {
      res.json(await Menu.get());
    } catch (e) {
      throw error({ status: 500, message: e.message });
    }
  })
);

module.exports = router;
