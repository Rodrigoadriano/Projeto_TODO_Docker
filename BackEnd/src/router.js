const express = require('express');
const router = express.Router();
const controller = require('./controllers/tskController')

router.get('/tasks', controller.getAll);



module.exports = router;