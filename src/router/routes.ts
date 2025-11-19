import type { ServerResponse } from "http";
import type { AppRoutes } from "../types/routes";
import type { Task } from "../types/task";

const Routes: AppRoutes = {
  "/tasks": {
    POST: (res: ServerResponse, data?: Task) => {
      console.log({ data });
      return res.end("Criar Task");
    },
    GET: (res: ServerResponse) => {
      return res.end("Devolver Tasks");
    },
  },
};

export default Routes;
