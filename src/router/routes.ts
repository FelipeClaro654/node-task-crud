import type { AppRoutes } from "../types/routes";

const Routes: AppRoutes = {
  "/tasks": {
    POST: ({ req, res }) => {
      return res.end("Criar Task");
    },
    GET: ({ res }) => {
      return res.end("Devolver Tasks");
    },
  },
};

export default Routes;
