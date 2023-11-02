import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Tasks } from "../entity/Tasks";

const repository = AppDataSource.getRepository(Tasks);

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await repository.find();
  return res.json(tasks);
};

export const saveTask = async (req: Request, res: Response) => {
  const task = await repository.save(req.body);
  return res.json(task);
};

export const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await repository.findOneBy({ id: parseInt(id) });
  return res.json(task);
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await repository.update(id, req.body);
  if (task.affected === 1) {
    const taskUpdated = await repository.findOneBy({ id: parseInt(id) });
    return res.json(taskUpdated);
  } else {
    return res.status(404).json({ message: "Tarefa não encontrada!" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await repository.delete(id);

  if (task.affected === 1) {
    return res.status(204).json({ message: "Tarefa removida com sucesso!" });
  } else {
    return res.status(404).json({ message: "Tarefa não encontrada!" });
  }
};

export const finishedTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await repository.update(id, { finished: true });

  if (task.affected === 1) {
    const taskUpdated = await repository.findOneBy({ id: parseInt(id) });
    return res.json(taskUpdated);
  } else {
    return res.status(404).json({ message: "Tarefa não encontrada!" });
  }
};
