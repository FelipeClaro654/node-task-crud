import http from "node:http";
import Router from "./router/index.ts";
import type { HttpMethods, RoutePaths } from "./types/routes";

const server = http.createServer((req, res) => {
  const { url, method } = req;

  return Router({ url: url as RoutePaths, method: method as HttpMethods, res });
});

server.listen(3333);
