const express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
port = 80;

app.get("/", (req, res) => {
    res.render("index.ejs");
})
// app.post("/", (req, res) => {
//     const origin = req.body.origin;
//     const destination = req.body.destination;
//     const googleKey = "AIzaSyA0TW4kTWtG7vu06Xr16S2JyEMupBfBhH8";
//     let distance = null;
//     const disUrl = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + origin + "&destinations=" + destination + "&units=metric&key=" + googleKey;
//     https.get(disUrl, function (response) {
//         response.on("data", async function (d) {
//             const data = await JSON.parse(d);
//             distance = await data.rows[0].elements[0].distance.text;
//             if (data.rows[0].elements[0].status === "OK") {
//                 res.render("index.ejs", { dis: distance, p1: data.origin_addresses[0], p2: data.destination_addresses[0] });
//             }
//             else {
//                 res.render("index.ejs", { dis: "Not Possible to go by Road", p1: data.origin_addresses[0], p2: data.destination_addresses[0] })
//             }
//         })
//     });
// })
app.listen(port, () => {
    console.log("Server started on port " + port);
})

// AIzaSyA0TW4kTWtG7vu06Xr16S2JyEMupBfBhH8
