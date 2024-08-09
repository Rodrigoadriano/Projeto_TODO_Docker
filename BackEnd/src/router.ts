import express from 'express';
import Taskcontroller from './controllers/Taskcontroller';
import tksMiddleware from './middlewares/tksMiddleware';
const router = express.Router();

router.get('/tasks', Taskcontroller.getAll);
router.post('/tasks', tksMiddleware.titleValidade, Taskcontroller.createTask);
router.put('/tasks/:id',tksMiddleware.statusValidade,tksMiddleware.titleValidade,Taskcontroller.updateTask);
router.delete('/tasks/:id', Taskcontroller.deleteTask);

export default router;