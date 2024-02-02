import mongoose from "mongoose";

const tripsSchema = new mongoose.Schema(
  {
    tripStartDate: {
      type: String,
      required: true,
    },
    tripEndDate: {
      type: String,
      required: true,
    },
    pickupTime: {
      type: String,
      required: true,
    },
    dropoffTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["booked", "upcoming", "in progress", "cancelled", "completed"],
      default: "booked",
    },
    tripOwner: {
      username: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
    },
    vehicle: {
      name: {
        type: String,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
      specification: {
        type: String,
        enum: ["manual", "automatic"],
        default: "manual",
      },
      price: {
        type: Number,
        required: true,
      },
    },
    totalCost: {
      price: {
        type: Number,
        required: true,
      },
      days: {
        type: Number,
        required: true,
      },
      tax: Number,
      total: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Trips = mongoose.models.trips || mongoose.model("trips", tripsSchema);

export default Trips;
