const express = require('express');
const router = express.Router();
const controller = require('./controllers/tskController')
const middleware = require('./middlewares/tksMiddleware')

router.get('/tasks', controller.getAll);
router.post('/tasks', middleware.BodyValidade ,  controller.createTask);
router.delete('/tasks' , controller.deleteTask);



module.exports = router;