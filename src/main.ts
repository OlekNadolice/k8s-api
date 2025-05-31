import express, {Express} from 'express';
import cors from 'cors'
bootstrapApplication()


function bootstrapApplication() {
  const app = express()
  const PORT = parseInt(process.env.PORT as string) || 8000
  applyMiddlewares(app)
  app.listen(8000, () => {
    console.log(`Process is running on port ${PORT}...` )
})
}


function applyMiddlewares(app:Express) {
 console.log("Applying middlewares...")
 app.use(express.json())
 app.use(cors())
  console.log("Middlewares have just been applied")
}

