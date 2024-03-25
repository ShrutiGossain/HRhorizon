import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(   
  {
    "Total Working Years" : Number,
    "Years At Company": Number ,
    "Years In Current Role" : Number,
    "Years Since Last Promotion" : Number,
    "Years With Curr Manager" : Number,
  },
  { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;