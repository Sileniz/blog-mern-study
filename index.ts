import express, {type Express, Request, Response} from 'express'
import { routerHandler } from './src/routes/user.route'
const app: Express = express()

app.use(express.json())
app.use(routerHandler)
app.listen(3000, () => console.log(`\nServer is running! | Port ${3000}`))