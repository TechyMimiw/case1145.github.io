const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
const port = 5000;
const jsonParser = bodyParser.json();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.get("/", (req, res) => {
    //   res.send("Hello LazyMimiw! 😸");
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));

});

app.get("/case-1154", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "chat.html"));
});

app.get("/finding-nemo", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "riddle.html"));
});

app.get("/0801", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "login.html"));
});

app.post("/login", jsonParser, function (req, res) {
    const validUser = { username: "serial_hacker", password: "wondering0807" };
    console.log("req.body", req.body);
    if (validUser.username == req.body.username && validUser.password == req.body.password)
        res.status(200).send({ redirect: "https://drive.google.com/drive/folders/1_o0lg4QPRcIZvnLTIT36oaWYnIEPWTlY" });
    else
        res.status(400).send({ errorMsg: "Invalid login details. 🤭" });
});

app.get("/congratulations", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "evidence.html"));
});

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });