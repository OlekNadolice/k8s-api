import express, {Express, Router} from 'express';
import cors from 'cors'
import { clusterController } from './api/cluster-controller';

bootstrapApplication()


function bootstrapApplication() {
  const app = express()
  const PORT = parseInt(process.env.PORT as string) || 8000
  applyMiddlewares(app)
  injectControllers(app)
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

function injectControllers(app:Express) {
  const API_VERSION = 'api/v1'
  app.use('', clusterController)
  // const controllers = [clusterController]
  // console.log('Injecting controllers...')

  // controllers.forEach((controller:Router) => {
  //   app.use(API_VERSION, controller)
  // })

  console.log('Controllers have been injected')

}