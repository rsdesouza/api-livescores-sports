module.exports = app => {
    const events = require("../controllers/events.controller.js");
    var router = require("express").Router();
    const swaggerUi = require('swagger-ui-express');
    const yamljs = require('yamljs');
    const swaggerSpec = yamljs.load('swagger.yaml');
  
    router.use('/api-docs', swaggerUi.serve);
    router.get('/api-docs', swaggerUi.setup(swaggerSpec));
  
    router.post("/", events.create);
    router.get("/live", events.findLiveEvents);
    router.get("/byEventDate/:eventDate", events.findEventsByEventDate);
    router.get("/finished/byDate/:eventDate", events.findFinishedEventsByEventDate);
  
    app.use("/events", router);
  };