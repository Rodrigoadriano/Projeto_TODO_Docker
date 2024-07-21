const express = require('express');
const router = express.Router();
const controller = require('./controllers/tskController')
const middleware = require('./middlewares/tksMiddleware')

router.get('/tasks', controller.getAll);
router.post('/tasks', middleware.titleValidade ,  controller.createTask);
router.put('/tasks/:id' , middleware.titleValidade, middleware.statusValidade, controller.updateTask);
router.delete('/tasks/:id' , controller.deleteTask);



module.exports = router;