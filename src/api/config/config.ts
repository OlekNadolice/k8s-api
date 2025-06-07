
import  ClusterController  from "../controllers/ClusterController";
// import { userController } from "../controllers/UserController";
import  AuthController  from "../controllers/AuthController";
import AuthService from "../../core/services/AuthService";





export const controllers = [
    {path: "/clusters", controller: new ClusterController().router},
    // {path: "/users", controller: userController},
    {path: "/auth", controller: new AuthController(new AuthService()).router},
     
]



