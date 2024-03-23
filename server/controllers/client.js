import Attrition from "../models/Attrition";
import AttritionStat from "../models/AttritionStat";

export const getAttritions = async (req, res) => {
    try {
        const attritions = await Attrition.find();

        const attritionsWithStats = await Promise.all(
            attritions.map(async (attrition) => {
                const stat = await AttritionStat.find({
                    _id : product._id,
                });
            return {
                ...attrition._doc,
                stat,
            }
       })
    );

    res.status(200).json(attritionsWithStats);
    
      } catch (error) {
        res.status(404).json({ message: error.message });  // otherwise throws error.
      }
}