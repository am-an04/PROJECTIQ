import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    domain: {
      type: String,
      required: true,
      trim: true,
    },

    projectType: {
      type: String,
      enum: ["Technical", "Non-Technical"],
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    status: {
      type: String,
      enum: ["Draft", "Active", "Completed"],
      default: "Draft",
    },
  },
  {
    timestamps: true,
  }
);

export const ProjectModel = model("Project", projectSchema);