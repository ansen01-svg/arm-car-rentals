import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
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
      required: true,
    },
    numberPlate: {
      type: String,
      required: true,
      unique: [true, "A car with this number plate is already in the fleet"],
    },
    color: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["Diesel", "Petrol", "Electric"],
      required: true,
    },
    seats: {
      type: Number,
      default: 5,
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
    },
    image: {
      type: String,
      required: true,
    },
    availabilityStatus: {
      type: String,
      enum: ["Available", "Not available"],
      default: "Available",
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
