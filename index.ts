import express, {type Express, Request, Response} from 'express'
const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({Message: "Hello world"})
})

app.listen(3000, () => {
  console.log('Server is running!')
})