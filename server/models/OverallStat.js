import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
  {
    totalEmployees: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        Performance: Number,
        Average: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        Performance: Number,
        Average: Number,
      },
    ],
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

const OverallStat = mongoose.model("OverallStat", OverallStatSchema);
export default OverallStat;