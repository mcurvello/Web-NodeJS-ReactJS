import { Request, Response, Router } from "express";
import {
  deleteTask,
  finishedTask,
  getTask,
  getTasks,
  saveTask,
  updateTask,
} from "./controller/TasksController";

const routes = Router();
routes.get("/", (req: Request, res: Response) => {
  return res.json({ message: "Hello World" });
});

routes.get("/tasks", getTasks);
routes.post("/tasks", saveTask);
routes.get("/tasks/:id", getTask);
routes.put("/tasks/:id", updateTask);
routes.delete("/tasks/:id", deleteTask);
routes.patch("/tasks/:id", finishedTask);

export default routes;
