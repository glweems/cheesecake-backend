import { wrap, error, validateQuery } from '../utils';
import Event from '../models/Event';

const router = require('express-promise-router')();

router.get(
  '/',
  validateQuery(['id', 'street']),
  wrap(async (req, res) => {
    try {
      res.json(await Event.query());
    } catch (e) {
      throw error({ status: 500, message: e.message });
    }
  })
);

router.get(
  '/:id',
  validateQuery(['id', 'street']),
  wrap(async (req, res) => {
    try {
      res.json(await Event.query().findById(req.params.id));
    } catch (e) {
      throw error({ status: 500, message: e.message });
    }
  })
);

module.exports = router;
