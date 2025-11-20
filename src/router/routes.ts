import { createDatabase } from "../database.ts";
import type { AppRoutes } from "../types/routes";

const database = createDatabase();
const Routes: AppRoutes = {
  "/tasks": {
    POST: ({ req, res }) => {
      database.insertData({ table: "tasks", data: req.body });
      return res.end("Criar Task");
    },
    GET: ({ res }) => {
      return res.end("Devolver Tasks");
    },
  },
};

export default Routes;
