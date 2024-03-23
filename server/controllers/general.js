import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;    // finding info on the basis of id
    const user = await User.findById(id);   //  grab the user info by finding User through id.
    res.status(200).json(user);   // sending user info to the frontend
  } catch (error) {
    res.status(404).json({ message: error.message });  // otherwise throws error.
  }
}

//  finding by id, id is fetched here through routes general.js