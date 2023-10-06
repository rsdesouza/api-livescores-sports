const { v4: uuidv4 } = require('uuid');

module.exports = mongoose => {
  const participantSchema = new mongoose.Schema({
    id: {
      type: String,
      default: uuidv4,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: true
    }

  });

  return mongoose.model('Participant', participantSchema);
};
