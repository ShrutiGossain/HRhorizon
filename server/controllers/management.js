import mongoose from "mongoose";
import User from "../models/User.js";
import List from "../models/List.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;

    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" },
    ]);

    const saleLists = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return List.findById(id);
      })
    );
    const filteredSaleLists = saleLists.filter(
      (list) => list !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleLists });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};