import mongoose from "mongoose";

const authModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name"],
  },
  email: {
    type: String,
    required: [true, "please enter the email"],
  },
  password: {
    type: String,
    required: [true, "please enter the password"],
  },
  role: {
    type: String,
    enum: ["admin", "member"],
  },
});

const authDB = mongoose.model('authdb', authModel)

export default authDB