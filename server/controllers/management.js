import mongoose from "mongoose";
import Performance from "../models/Performance.js";

export const getUserPerformance = async(req, res) => {
    try{
        const performance = await Performance.find({ Over18 : "Y"}).select("-password");
        res.status(200).json(performance); 
    }
    catch (error) {
        res.status(404).json({ message: error.message });  // otherwise throws error.
      }
}