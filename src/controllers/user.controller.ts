import {type Request, Response} from 'express'

interface requestHandler {
  (req: Request, res: Response): void
}
class controller {
  public helloWorld: requestHandler = (req, res) => {
    res.status(200).json({ Message: "Hello world" });
  };
  public putHello: requestHandler = (req, res) => {
    const { sendHello } = req.body
    if(!sendHello){
      res.status(400).json({message: "Sem body"}).end()
    }
    res.status(201).json({send: sendHello})
  }
}
export const controlHandler = new controller()
