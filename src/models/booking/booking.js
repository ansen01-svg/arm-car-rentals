import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
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
    carId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["in booking process", "booked", "cancelled", "completed"],
      default: "in booking process",
    },
    driver: {
      name: String,
      phoneNumber: Number,
      contactEmail: String,
      liscenceNumber: String,
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
      discount: Number,
      total: Number,
    },
    payment: {
      promoCode: String,
      status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending",
      },
      method: {
        type: String,
        enum: ["Cash", "Online"],
        default: "Cash",
      },
    },
    itineraryNumber: Number,
  },
  {
    timestamps: true,
  }
);

const Booking =
  mongoose.models.booking || mongoose.model("booking", bookingSchema);

export default Booking;
