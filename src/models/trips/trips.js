import mongoose from "mongoose";

export const tripsSchema = new mongoose.Schema({
  tripStartDate: Date,
  tripEndDate: Date,
  pickupTime: String,
  status: {
    type: [String],
    enum: ["Completed", "Upcoming"],
    default: "Upcoming",
  },
});
