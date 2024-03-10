import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    Department: String,
    Gender : String,
    Age : Number, 
    Education : String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
