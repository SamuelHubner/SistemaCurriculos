const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

const formRouter = require("./routes/routes.js");

app.use(cors());

app.use(express.json());

app.listen(port, () => {
    app.use("/api", formRouter);
    console.log(`App docker listening on port:${port}`);
});
