const mongoose = require("mongoose");

const healthRecordSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: [true, "Patient name is required"],
      trim: true,
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [0, "Age cannot be negative"],
    },

    condition: {
      type: String,
      required: [true, "Medical condition is required"],
      trim: true,
    },

    status: {
      type: String,
      enum: ["Stable", "Critical", "Recovered"],
      default: "Stable",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("HealthRecord", healthRecordSchema);
