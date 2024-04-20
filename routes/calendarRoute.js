const express   = require('express');
const router    = express.Router();

const calendarCtrl = require('../controllers/calendarController');
router.get('/api/event/list', calendarCtrl.getEventData);
router.post('/api/event', calendarCtrl.saveEventData);
router.put('/api/event', calendarCtrl.updateEventData);
router.delete('/api/event', calendarCtrl.deleteEventData);

module.exports = router;