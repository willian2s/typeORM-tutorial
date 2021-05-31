import 'reflect-metadata';
import config from 'config';
import app from './app';
import logger from './logger';
import './database';

const port: number = config.get('App.port');

app.listen(port, () => {
  logger.info(`🏃 🚀 Running Server on port ${port}`);
});
