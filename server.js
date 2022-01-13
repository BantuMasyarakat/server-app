const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const fs = require("fs");
const { rewrite } = require("./rewrite");
const cors = require("cors");

const corsOptions = {
  origin: 'https://bantumasyarakat.github.io/landing_page_promo',
  optionsSuccessStatus: 200,
}


app.use(cors(corsOptions));

const json = fs.readFileSync("./tokenAvailable.json", "utf-8");

app.use(cors());

app.use(express.static("./"));

app.get("/", (req, res) => {
    res.sendFile("./index.html");
});

app.get("/get", (req, res) => {
    res.set({
        "access-control-allow-origin": "*",
        "content-type": "application/json",
    });
    if (rewrite()) {
        res.json(json);
    }
});

app.listen(port, () => {
    console.log("Server running at http://localhost:" + port);
});
