import express, { type Request, Response, Router} from 'express'
import { controlHandler } from "../controllers/user.controller"

class ClassRouter {
  public router: Router;

  constructor(){
    this.router = express.Router();
    this.initialRouters()
  }
  private initialRouters() {
    this.router.get("/", controlHandler.helloWorld)
    this.router.post('/teste', controlHandler.putHello)
  }
}
export const routerHandler = new ClassRouter().router