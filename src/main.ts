import express from 'express';
import cors from 'cors'
import logger from './logger';
import morgan from 'morgan'
import * as di from './infrastructure/di/container';
import { InversifyExpressServer } from 'inversify-express-utils';


bootstrapApplication()


function bootstrapApplication() {
  const PORT = parseInt(process.env.PORT as string) || 8000
  const server = new InversifyExpressServer(di.container)
  applyMiddlewares(server)
  const app = server.build();
  app.listen(PORT, () => {
    logger.info(`Process is running on port ${PORT}...` )
})
}


function applyMiddlewares(server:InversifyExpressServer) { 
 logger.info("Applying middlewares...")
  server.setConfig((app) => {
   app.use(express.json())
  app.use(cors())
  app.use(morgan('dev'))
});
 logger.info("Middlewares have just been applied")
}

