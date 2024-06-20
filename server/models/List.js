import mongoose from "mongoose";

const ListSchema = new mongoose.Schema(
  {
    userId: String,
    salary: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const List = mongoose.model("List", ListSchema);
export default List;