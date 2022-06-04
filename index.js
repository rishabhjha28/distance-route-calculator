const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var port = process.env.PORT || 80;

app.get("/", (req, res) => {
    res.render("index.ejs");
})
app.listen(port || process.env.PORT, () => {
    console.log("Server started on port " + port);
})