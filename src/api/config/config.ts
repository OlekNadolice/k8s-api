import { Router } from "express";
import { clusterController } from "../controllers/ClusterController";
import { userController } from "../controllers/UserController";
import { authController } from "../controllers/AuthController";

export function getRouter():Router {
    return  Router()
}



export const controllers = [
    {path: "/clusters", controller: clusterController},
    {path: "/users", controller: userController},
    {path: "/auth", controller: authController},
     
]



