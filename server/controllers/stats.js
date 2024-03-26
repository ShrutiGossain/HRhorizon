import OverallStat from "../models/OverallStat.js";

export const getStats = async(req, res) => {
    try{
        const overallStats = await OverallStat.find();
        res.status(200).json(overallStats[0]);
    }
    catch(error){
        res.status(400).json({ message: error.message});
    }
}