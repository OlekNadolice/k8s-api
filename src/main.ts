import express, {Express} from 'express';
import cors from 'cors'
import { controllers, ControllerConfig } from './api/config';
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
  logger.info('Injecting controllers...')
   controllers.forEach((element:ControllerConfig) => {
    const API_PATH = '/api/v1' + element.path
    app.use(API_PATH, element.controller)
  })
  logger.info('Controllers have been injected')

}