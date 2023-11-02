import "reflect-metadata";
import { DataSource } from "typeorm";
import { Tasks } from "./entity/Tasks";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "suleiman.db.elephantsql.com",
  port: 5432,
  username: "rppsehhx",
  password: "XbOeAmYLxUqDx1EIZqKjndZxahca24pJ",
  database: "rppsehhx",
  synchronize: true,
  logging: false,
  entities: [Tasks],
  migrations: [],
  subscribers: [],
});
