import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  Department: String,
  Gender: String,
  Age: Number,
  Education: String,
});

const User = model("User", UserSchema);
export default User;
