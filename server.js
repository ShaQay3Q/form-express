if (process.env.NODE_ENV !== "production") {
	require("dotenv").config;
}

const express = require("express");

const app = express();

const Cats = [];

app.listen(3000);

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/register", (req, res) => {
	const currentDateRaw = new Date();
	const formatDateISO = (date) => {
		// Convert the date to ISO string
		const isoString = date.toISOString();
		// Split at the "T" character to get the date part
		const formattedDate = isoString.split("T")[0];
		return formattedDate;
	};

	const currentDate = formatDateISO(currentDateRaw);
	console.log(typeof currentDate);

	res.render("register.ejs", { date: currentDate });
});
app.post("/register", (req, res) => {});
