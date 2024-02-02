import mongoose from "mongoose";

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
    myTrips: [{ tripId: String }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
