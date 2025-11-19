import http, { ServerResponse } from "node:http";
import type { Task } from "./task";

export type RequisitionParams = {
  url: RoutePaths;
  method: HttpMethods;
  data?: Task;
};

export type RouterParams = {
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  };
} & RequisitionParams;

export type RoutePaths = "/tasks";

export type RouteHandler = (res: ServerResponse, data?: Task) => void;

export type HttpMethods = "GET" | "POST";

export type AppRoutes = {
  [route in RoutePaths]: {
    [method in HttpMethods]: RouteHandler;
  };
};
