import mongoose from "mongoose";

const PerformanceSchema = new mongoose.Schema(
  {
    
    "Over18" : String,
    "Job Involvement": Number,
    "Job Satisfaction": Number,
    "Percent Salary Hike": Number,
    "Performance Rating": Number,
    "Years Since Last Promotion": Number,
  },
  { timestamps: true }
);

const Performance = mongoose.model("Performance", PerformanceSchema);
export default Performance;