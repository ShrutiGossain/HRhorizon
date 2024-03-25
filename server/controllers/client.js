import Attrition from "../models/Attrition";
import AttritionStat from "../models/AttritionStat";
import User from "../models/User.js";
import List from "../models/List.js";

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

export const getEmployees = async(req, res) => {
    try{
        const employees = await User.find({ role : "user"}).select("-password");
        res.status(200).json(employees);
    }
    catch (error) {
        res.status(404).json({ message: error.message });  // otherwise throws error.
      }
}

export const getLists = async(req, res) => {
    try{
        // sort should look like this: { "field": "userId", "sort": "desc"}
        const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

        // formatted sort should look like { userId: -1 }
    const generateSort = () => {
        const sortParsed = JSON.parse(sort);
        const sortFormatted = {
          [sortParsed.field]: (sortParsed.sort = "asc" ? 1 : -1),
        };
  
        return sortFormatted;
      };

      const sortFormatted = Boolean(sort) ? generateSort() : {};

      const lists = await List.find({
        $or: [

          { userId: { $regex: new RegExp(search, "i") } },
        ],
      })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize);

        const total = await List.countDocuments({
            name: { $regex: search, $options: "i" },
          });

          res.status(200).json({
            lists,
            total,
          });
    }
    catch (error) {
        res.status(404).json({ message: error.message });  // otherwise throws error.
      }
}