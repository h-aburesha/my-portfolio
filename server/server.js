// i want to setup a server.js file that will render the app on the server side

const express = require("express");
const app = express();
const port = 6060;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Fire app listening at http://localhost:${port}`);
});
