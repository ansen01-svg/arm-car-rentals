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
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true,
    },
    vehicleNumber: {
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
      enum: ["In booking process", "Booked", "Cancelled", "Completed"],
      default: "In booking process",
    },
    driver: String,
    phoneNumber: Number,
    contactEmail: String,
    liscenceNumber: String,
    rate: {
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
    paymentStatus: {
      type: String,
      enum: ["Pending", "Completed"],
      default: "Pending",
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Online"],
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
