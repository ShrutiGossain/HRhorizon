import mongoose from "mongoose";

const AttritionSchema = new mongoose.Schema(
  { 
    Attrition: String,
  },
  { timestamps: true }
);

const Attrition = mongoose.model("Attrition", AttritionSchema);
export default Attrition;