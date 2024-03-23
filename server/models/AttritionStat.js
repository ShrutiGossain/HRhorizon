import mongoose from "mongoose";

const AttritionStatSchema = new mongoose.Schema(
  {
    Attrition: String,
    Department : String,
    Gender : String,
    Age: Number,
  },
  { timestamps: true }
);

const AttritionStat = mongoose.model("AttritionStat", AttritionStatSchema);
export default AttritionStat;