import mongoose from "mongoose";

const ListSchema = new mongoose.Schema(   
  {
    Attrition : String,
    Department: String,
    Gender : String,
    Age : Number, 
    Education : String,
  },
  { timestamps: true }
);

const List = mongoose.model("List", ListSchema);
export default List;
