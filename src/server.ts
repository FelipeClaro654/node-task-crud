import http from "node:http";
import Router from "./router/index.ts";
import { jsonParse } from "./middlewares/jsonParse.ts";

const server = http.createServer(async (req, res) => {
  await jsonParse({ req, res });
  return Router({ req, res });
});

server.listen(3333);
