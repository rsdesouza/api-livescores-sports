const db = require("../models");
const Event = db.events;
const Competition = db.competitions;

exports.createEvent = async (eventData) => {
  try {
    const event = new Event(eventData);
    const savedEvent = await event.save();
    return savedEvent;
  } catch (error) {
    throw new Error(error.message || "Ocorreu um erro ao criar o Evento.");
  }
};

exports.addParticipantToCompetition = async (competitionId, participantData) => {
  try {
    const competition = await Competition.findById(competitionId);
    if (!competition) {
      throw new Error("Competição não encontrada");
    }
    competition.participants.push(participantData);
    const savedCompetition = await competition.save();
    return savedCompetition;
  } catch (error) {
    throw new Error(error.message || "Ocorreu um erro ao adicionar o participante à competição.");
  }
};
