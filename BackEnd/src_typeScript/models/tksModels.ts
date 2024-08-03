import { Connection } from 'mysql2/promise';
import { connection } from './connection'; // Ajuste o caminho conforme necessário

// Define o tipo de Task para tipar os dados de entrada e saída
interface Task {
  id?: number;
  title: string;
  status?: string;
  created_at?: string;
}

// Obtém todas as tarefas
export const getAll = async (): Promise<Task[]> => {
  const [tks] = await connection.execute('SELECT * FROM tasks');
  return tks as Task[];
};

// Cria uma nova tarefa
export const createTask = async (task: Task): Promise<{ Message: string }> => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const status = "Pendente";

  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)';
  const [resultado] = await connection.execute(query, [title, status, dateUTC]);

  return { Message: `Task: ${title} adicionada, ID: ${resultado.insertId}` };
};

// Deleta uma tarefa pelo ID
export const deleteTask = async (id: number): Promise<any> => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  const [resultado] = await connection.execute(query, [id]);
  return resultado;
};

// Atualiza uma tarefa pelo ID
export const updateTask = async (id: number, title: string, status: string): Promise<any> => {
  const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
  const [resultado] = await connection.execute(query, [title, status, id]);
  return resultado;
};
