import Routes from "./routes.ts";
import type { HttpMethods, RoutePaths, RouterParams } from "../types/routes";

const Router = ({ req, res }: RouterParams) => {
  const { url, method } = req;
  const route = Routes[url as RoutePaths];

  if (!route) {
    return res.end("Route not found!");
  }

  const handler = route[method as HttpMethods];

  if (!handler) {
    return res.end("Handler not found!");
  }

  return handler({ req, res });
};

export default Router;
