module.exports = mongoose => {
    const participantSchema = new mongoose.Schema({
      id: String,
      name: String,
      imageLink: String
    });
  
    const competitionSchema = new mongoose.Schema({
      participants: [participantSchema]
    });
  
    return mongoose.model('Competition', competitionSchema);
  };
  