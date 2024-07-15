const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> res.status(200).send("Home"))
router.get('/router', (req, res)=> res.status(200).send("Router ok!"))


module.exports = router;