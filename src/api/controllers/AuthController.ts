import { getRouter } from "../config/config";
import AuthService from "../../core/services/AuthService";
import { Request, Response } from "express";


 class AuthController {
    public router = getRouter()
    private authService = new AuthService()

   public constructor() {
        this.initRouter()
    }

   public  initRouter() {
        this.router.post('', this.registerUser)
        this.router.post('/login', this.loginUser)
    }

   public  async registerUser(req:Request, res:Response, next: Function): Promise<void>{
       res.json("asd")
    }

   public  async loginUser(req: Request, res: Response) {}

    
}



export default  AuthController



