import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  bookedFrom: String,
  bookedTill: String,
});

const carSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: ["Luxury", "Standard", "Van", "Premium"],
      required: true,
    },
    specification: {
      type: String,
      enum: ["Manual", "Automatic"],
      default: "Manual",
    },
    numberPlate: {
      type: String,
      required: true,
      unique: [true, "A car with this number plate is already in the fleet"],
      trim: true,
    },
    color: {
      type: String,
      required: true,
      trim: true,
    },
    fuelType: {
      type: String,
      enum: ["Diesel", "Petrol", "Electric"],
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
      trim: true,
    },
    doors: {
      type: Number,
      default: 4,
    },
    ac: {
      type: Boolean,
      enum: [true, false],
      default: true,
    },
    rate: {
      type: Number,
      min: [2000, "Rate cannot be less than 2000"],
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    availabilityStatus: {
      type: String,
      enum: ["Available", "Not available"],
      default: "Available",
    },
    bookings: {
      type: [bookingSchema],
    },
    status: {
      type: String,
      enum: ["Checked in", "Checked out"],
      default: "Checked in",
    },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.models.car || mongoose.model("car", carSchema);

export default Car;
