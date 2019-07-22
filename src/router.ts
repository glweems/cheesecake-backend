const router = require('express-promise-router')();

router.use('/', require('./controllers/home'));
router.use('/events', require('./controllers/event'));
router.use('/menu', require('./controllers/menu'));

module.exports = router;
