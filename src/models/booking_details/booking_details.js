import mongoose from "mongoose";

export const bookingDetailsSchema = new mongoose.Schema(
  {
    pickupDate: Date,
    dropoffDate: Date,
    pickupTime: String,
    dropoffTime: String,
  },
  {
    timestamps: true,
  }
);
