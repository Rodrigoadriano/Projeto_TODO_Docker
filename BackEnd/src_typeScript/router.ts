import express, { Request, Response, NextFunction } from 'express';
import { getAll, createTask, updateTask, deleteTask } from './controllers/tskController';
import { titleValidade, statusValidade } from './middlewares/tksMiddleware';

// Cria a instância do roteador
class Router {
  public router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  // Inicializa as rotas
  private initializeRoutes() {
    this.router.get('/tasks', this.handleGetAll);
    this.router.post('/tasks', titleValidade, this.handleCreateTask);
    this.router.put('/tasks/:id', titleValidade, statusValidade, this.handleUpdateTask);
    this.router.delete('/tasks/:id', this.handleDeleteTask);
  }

  // Métodos de controle das rotas
  private handleGetAll = (req: Request, res: Response) => {
    getAll(req, res);
  };

  private handleCreateTask = (req: Request, res: Response, next: NextFunction) => {
    createTask(req, res);
  };

  private handleUpdateTask = (req: Request, res: Response, next: NextFunction) => {
    updateTask(req, res);
  };

  private handleDeleteTask = (req: Request, res: Response) => {
    deleteTask(req, res);
  };
}

export default new Router().router;
