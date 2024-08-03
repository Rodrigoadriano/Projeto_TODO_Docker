import { Request, Response } from 'express';
import * as taskModel from '../models/tskModels';

// Função para obter todas as tarefas
export const getAll = async (_req: Request, res: Response): Promise<Response> => {
  try {
    const tks = await taskModel.getAll();
    console.log('Conexão DB: Ok!');
    return res.status(200).json(tks);
  } catch (err) {
    console.log('Conexão DB: Falhou:', err.code);
    return res.status(500).json({ error: err.code });
  }
};

// Função para criar uma nova tarefa
export const createTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const tks = await taskModel.createTask(req.body);
    return res.status(201).json(tks);
  } catch (err) {
    console.log('Meu Erro:', err.code);
    return res.status(500).json({ error: err.code });
  }
};

// Função para deletar uma tarefa
export const deleteTask = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  await taskModel.deleteTask(id);
  return res.status(200).json(`ID ${id} deleted!`);
};

// Função para atualizar uma tarefa
export const updateTask = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const { title, status } = req.body;

  await taskModel.updateTask(id, title, status);
  return res.status(204).json();
};
