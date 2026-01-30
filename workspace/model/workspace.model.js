import mongoose from "mongoose";

const workspaceSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter the name"],
  },
  description: {
    type: String,
    required: [true, "please enter the description"],
  },
  inviteCode: {
    type: String,
  },
  ownerId: {
    type: String,
    required: [true, "please enter the owner id"],
  },
  member: [
    {
      userId:{
        type: String,
        required: [true, 'please enter the user id']
      },
      role:{
        type: String,
        enum: ['admin', 'member']
      }
    }
  ],
});

const workspaceDB = mongoose.model('workspaceDB', workspaceSchema)

export default workspaceDB
