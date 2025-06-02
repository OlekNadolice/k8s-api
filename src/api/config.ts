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