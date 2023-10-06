const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API de Livescores',
      version: '1.0.0',
      description: 'API para fornecer dados de eventos ao vivo',
    },
    basePath: '/',
  },
  apis: ['./app/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
