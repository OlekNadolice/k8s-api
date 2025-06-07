
import AuthService from "../../core/services/AuthService";
import { Request, Response } from "express";
import Controller from "./AbstractController";
import { injectable } from "inversify";

@injectable()
 class AuthController extends Controller {
   
     private authService: AuthService;

     public constructor(authService: AuthService) {
        super()
        this.authService = authService
        
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



