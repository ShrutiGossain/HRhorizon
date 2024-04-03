import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(   
  // first make User Schema then go to controllers general.js
  {
    "Department": String,
    "Gender" : String,
    "Over18" : String,
    "Age" : Number, 
    "Education" : String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
