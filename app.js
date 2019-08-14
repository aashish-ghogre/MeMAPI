import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
const PORT = 8080;

const listenApp = app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

export default listenApp;
