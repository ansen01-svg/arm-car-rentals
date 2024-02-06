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
      enum: [
        "in booking process",
        "booked",
        "in progress",
        "cancelled",
        "completed",
      ],
      default: "in booking process",
    },
    tripOwner: {
      username: String,
      id: String,
    },
    vehicle: {
      type: {
        type: String,
        required: true,
      },
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
      fees: Number,
      total: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Trips = mongoose.models.trips || mongoose.model("trips", tripsSchema);

export default Trips;
