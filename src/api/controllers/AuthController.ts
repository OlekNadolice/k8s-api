
import AuthService from "../../core/services/AuthService";
import { Request, Response } from "express";
import Controller from "./AbstractController";


 class AuthController extends Controller {
   
    private authService = new AuthService()

     public constructor() {
        super()
        
    }

     initRouter() {
        this.router.post('/register', this.registerUser)
        this.router.post('/login', this.loginUser)
    }

     public  async registerUser(req:Request, res:Response, next: Function): Promise<void>{
       res.json("asd")
    }

   public  async loginUser(req: Request, res: Response) {}

    
}



export default  AuthController



