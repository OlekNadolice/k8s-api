export const  CONFIG_PROPERTIES = {
  PORT: process.env.PORT  || '8000',
  HOST: process.env.HOST_NAME || 'localhost',
  HTTPS: process.env.HTTPS_ENABLED === 'true'
}
