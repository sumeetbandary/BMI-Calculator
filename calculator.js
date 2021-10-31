const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
	var weight = parseFloat(req.body.weight);
	var height = parseFloat(req.body.height);
	var result = weight / (height * height);
	res.send("Your BMI is: " + result);
});

app.listen(port, function() {
	console.log("Server started");
});
