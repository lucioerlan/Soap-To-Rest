module.exports = {
  apps: [
    {
      name: 'REST_TO_SOAP',
      script: './server.js',
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};
