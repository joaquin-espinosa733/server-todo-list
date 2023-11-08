import express from "express";
import router from "./routes/index";
import morgan from "morgan";
import cors from "cors";

const app = express();
//* middlerwers
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/",router);

export = app;
