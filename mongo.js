const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://john-user17:Sakthi1721@cluster0.xlcyymi.mongodb.net/authentication"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("data", newSchema);

module.exports = collection;
