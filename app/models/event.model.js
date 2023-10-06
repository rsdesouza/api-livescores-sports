const { v4: uuidv4 } = require('uuid');

module.exports = mongoose => {
  const participantSchema = new mongoose.Schema({
    id: String,
    name: String,
    imageLink: String
  });

  const competitionSchema = new mongoose.Schema({
    participants: [participantSchema]
  });

  const eventSchema = new mongoose.Schema({
    id: {
      type: String,
      default: uuidv4,
      unique: true,
      required: true
    },
    participants: {
      type: [participantSchema],
      required: true
    },
    competition: competitionSchema,
    startTime: {
      type: String,
      required: true
    },
    eventDate: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['ao_vivo', 'a_iniciar', 'finalizado'],
      required: true
    }
  });

  return mongoose.model('Event', eventSchema);
};
