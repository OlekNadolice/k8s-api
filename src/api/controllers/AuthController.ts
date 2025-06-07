import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";




@controller("/auth")
 class AuthController {
   
     @httpGet("/")
     public  async registerUser(req:Request, res:Response, next: Function): Promise<void>{
       res.json("asd")
    }

   public  async loginUser(req: Request, res: Response) {}

    
}



export default  AuthController



