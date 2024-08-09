import express from 'express';
import Taskcontroller from './controllers/Taskcontroller';
const router = express.Router();

router.get('/tasks', Taskcontroller.getAll);
router.post('/tasks', Taskcontroller.createTask);
router.put('/tasks/:id', Taskcontroller.updateTask);
router.delete('/tasks/:id', Taskcontroller.deleteTask);

export default router;