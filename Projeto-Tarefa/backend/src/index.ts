import "reflect-metadata";
import * as bodyParser from "body-parser";
import * as express from "express";
import routes from "./routes";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(routes);
  app.listen(3333);
});
