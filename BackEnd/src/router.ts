import express from 'express';
import Taskcontroller from './controllers/Taskcontroller';
const router = express.Router();

router.get('/test', Taskcontroller.getAll);
router.post('/test', Taskcontroller.CreateTask);

export default router;