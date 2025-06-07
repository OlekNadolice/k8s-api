import { Router } from "express";

abstract class Controller {
    public router: Router

   public  constructor() {
    this.router = Router()
    this.initRouter()
   }

    protected abstract initRouter(): void

}


export default Controller