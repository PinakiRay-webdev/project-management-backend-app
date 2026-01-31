import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide the project name"],
  },
  description: {
    type: String,
    required: [true, "please provide the project description"],
  },
  workspaceId: {
    type: String,
    required: [true, "please provide the workspace id"],
  },
  ownerId: {
    type: String,
    required: [true, "please provide the owner id"],
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
