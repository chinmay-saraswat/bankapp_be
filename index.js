const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());
console.log('rootRouter:', rootRouter); // Log the root router object
app.use("/api/v1", rootRouter);

app.listen(3000);