import mongoose from "mongoose";
import { bookingDetailsSchema } from "../booking_details/booking_details";
import { tripsSchema } from "../trips/trips";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      minLength: [3, "Username should not be less than 3 characters"],
      maxLength: [3, "Username should not be greater than 20 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: [true, "This email has already been used"],
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minLength: [3, "Password should not be less than 3 characters"],
      maxLength: [3, "Password should not be greater than 20 characters"],
    },
    isVarified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    verificationTokenExpiry: Date,
    passwordResetToken: String,
    passwordResetTokenExpiry: Date,
    bookingId: String,
    bookingDetails: [bookingDetailsSchema],
    trips: [tripsSchema],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
