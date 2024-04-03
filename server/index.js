import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import statsRoutes from "./routes/stats.js";

// // data imports
// import User from "./models/User.js";   // to import schema
// import { dataUser } from "./data/index.js";  // to import data user
// import Attrition from "./models/Attrition.js";
// import AttritionStat from "./models/AttritionStat.js";
// import { dataAttrition, dataAttritionStat } from "./data/index.js";
// import List from "./models/List.js";
// import { dataList } from "./data/index.js";
// import OverallStat from "./models/OverallStat.js";
// import {dataOverallStat} from './data/index.js';
// import AffiliateStat from "./models/AffiliateStat.js";
// import {dataAffiliateStat} from './data/index.js';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/stats", statsRoutes);


/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // User.insertMany(dataUser);
    // Attrition.insertMany(dataAttrition);
    // AttritionStat.insertMany(dataAttritionStat);
    // List.insertMany(dataList);
    // OverallStat.insertMany(dataOverallStat);
    // AffiliateStat.insertMany(dataAffiliateStat);

    
  })
  .catch((error) => console.log(`${error} did not connect`));