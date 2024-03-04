const express = require("express");
const path = require("path");

const app = express();
const port = 5000;


app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/", (req, res) => {
    //   res.send("Hello LazyMimiw! 😸");
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));

});

app.get("/case-1154", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "chat.html"));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});