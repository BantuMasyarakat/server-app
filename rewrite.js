const fs = require("fs");

const read = fs.readFileSync("./tokenAvailable.json", "utf-8");

function rewrite() {
    const json = JSON.parse(read);
    json["tokenAvailable"].pop();
    fs.writeFileSync("./tokenAvailable.json", JSON.stringify(json));
    return true;
}

// rewrite();
// console.log(fs.readFileSync("./tokenAvailable.json", "utf-8"));

module.exports = { rewrite };
