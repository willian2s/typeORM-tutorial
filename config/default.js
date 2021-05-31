require('dotenv/config');
module.exports = {
  App: {
    port: process.env.PORT,
    encrypt: {
      key: process.env.ENCRYPT_KEY,
      iv: process.env.ENCRYPT_IV,
    },
    logger: {
      enabled: true,
      level: 'info',
    },
  },
};
