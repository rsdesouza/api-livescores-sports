const db = require("../models");
const Event = db.events;

exports.create = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.send(event);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao criar o Evento."
    });
  }
};

exports.findLiveEvents = async (req, res) => {
  try {
    const liveEvents = await Event.find({ status: "ao_vivo" });
    res.send(liveEvents);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao recuperar os eventos ao vivo."
    });
  }
};

exports.findEventsByEventDate = async (req, res) => {
  try {
    const eventDate = req.params.eventDate;
    const events = await Event.find({ eventDate });
    res.send(events);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao recuperar os eventos por data de início."
    });
  }
};

exports.findFinishedEventsByEventDate = async (req, res) => {
  try {
    const eventDate = req.params.eventDate;
    const finishedEvents = await Event.find({
      eventDate: eventDate,
      status: "finalizado"
    });
    res.send(finishedEvents);
  } catch (error) {
    res.status(500).send({
      message: error.message || "Ocorreu um erro ao recuperar os eventos finalizados por data de início."
    });
  }
};
