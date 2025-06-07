
import  clusterController  from "../controllers/ClusterController";
// import { userController } from "../controllers/UserController";
import  AuthController  from "../controllers/AuthController";





export const controllers = [
    {path: "/clusters", controller: clusterController},
    // {path: "/users", controller: userController},
    {path: "/auth", controller: new AuthController().router},
     
]



