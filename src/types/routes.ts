import { ServerResponse, IncomingMessage } from "node:http";

type ExtendedRequisition<T = any> = IncomingMessage & { body?: T | null };

export type RouterParams = {
  res: ServerResponse;
  req: ExtendedRequisition;
};

export type RoutePaths = "/tasks";

export type RouteHandler = ({ res, req }: RouterParams) => void;

export type HttpMethods = "GET" | "POST";

export type AppRoutes = {
  [route in RoutePaths]: {
    [method in HttpMethods]: RouteHandler;
  };
};
