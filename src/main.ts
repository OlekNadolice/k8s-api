import express, {Express} from 'express';
import cors from 'cors'
import { controllers} from './api/config/config';
import { ControllerConfig } from './api/config/types';
import logger from './logger';
import morgan from 'morgan'

bootstrapApplication()


function bootstrapApplication() {
  const app = express()
  const PORT = parseInt(process.env.PORT as string) || 8000
  applyMiddlewares(app)
  injectControllers(app)
  app.listen(PORT, () => {
    logger.info(`Process is running on port ${PORT}...` )
})
}


function applyMiddlewares(app:Express) { 
 logger.info("Applying middlewares...")
 app.use(express.json())
 app.use(cors())
 app.use(morgan('dev'))
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