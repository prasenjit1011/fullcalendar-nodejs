const express   = require('express');
const router    = express.Router();

const calendarCtrl = require('../controllers/calendarController');
router.get('/api/event/list', calendarCtrl.getEventData);
router.post('/api/event', calendarCtrl.saveEventData);
router.delete('/api/event', calendarCtrl.deleteEventData);

module.exports = router;