import express, {Express, Router} from 'express';
import cors from 'cors'
import { clusterController } from './api/cluster-controller';
import logger from './logger';

bootstrapApplication()


function bootstrapApplication() {
  const app = express()
  const PORT = parseInt(process.env.PORT as string) || 8000
  applyMiddlewares(app)
  injectControllers(app)
  app.listen(8000, () => {
    logger.info(`Process is running on port ${PORT}...` )
})
}


function applyMiddlewares(app:Express) { 
 logger.info("Applying middlewares...")
 app.use(express.json())
 app.use(cors())
 logger.info("Middlewares have just been applied")
}

function injectControllers(app:Express) {
  const API_VERSION = '/api/v1'
  const controllers = [clusterController]
  logger.info('Injecting controllers...')
  controllers.forEach((controller:Router) => {
    app.use(API_VERSION, controller)
  })

  logger.info('Controllers have been injected')

}