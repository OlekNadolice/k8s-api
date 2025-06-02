import { Router } from "express";
import { clusterController } from "./cluster-controller";

export function getRouter():Router {
    return  Router()
}



export const controllers = [
    {path: "/clusters", controller: clusterController},
     
]



export type ControllerConfig = {
    path: string,
    controller: Router
}

export enum HTTP_STATUSES  {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409
}