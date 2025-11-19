import Routes from "./routes.ts";
import type { RouterParams } from "../types/routes";

const Router = ({ url, method, data, res }: RouterParams) => {
  const route = Routes[url];

  if (!route) {
    return res.end("Route not found!");
  }

  const handler = route[method];

  if (!handler) {
    return res.end("Handler not found!");
  }

  return handler(res, data);
};

export default Router;
