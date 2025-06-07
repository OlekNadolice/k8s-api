import express from 'express';
import cors from 'cors';
import logger from './logger';
import morgan from 'morgan';
import * as di from './infrastructure/di/container';
import { InversifyExpressServer } from 'inversify-express-utils';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from 'api/config/swagger';

import { CONFIG_PROPERTIES } from 'config';

function bootstrapApplication() {
  const server = new InversifyExpressServer(di.container);
  applyMiddlewares(server);
  const app = server.build();
  app.listen(parseInt(CONFIG_PROPERTIES.PORT), () => {
    logger.info(`Process is running on port ${CONFIG_PROPERTIES.PORT}...`);
  });
}

function applyMiddlewares(server: InversifyExpressServer) {
  logger.info('Applying middlewares...');
  server.setConfig((app) => {
    app.use(express.json());
    app.use(cors());
    app.use(morgan('dev'));
    app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  });
  logger.info('Middlewares have just been applied');
}


bootstrapApplication();