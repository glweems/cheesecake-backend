import { wrap, error } from '../utils';
import Event from '../models/Event';

const router = require('express-promise-router')();

router.get(
  '/',
  wrap(async (req, res) => {
    try {
      res.json(await Event.query());
    } catch (e) {
      throw error({ status: 500, message: e.message });
    }
  })
);

module.exports = router;
