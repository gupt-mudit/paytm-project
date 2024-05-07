const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);
console.log("app listening on port 3000");
app.listen(3000);

