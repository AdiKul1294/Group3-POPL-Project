let express = require("express");
let app = express();
let signupRoute = require("./src/routes/signup");
let loginRoute = require("./src/routes/login");
let noteRoute = require("./src/routes/note");
let path = require("path");
let bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
});
app.use(signupRoute);
app.use(loginRoute);
app.use(noteRoute);
app.use(express.static("public"));

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send("Error 404: Page not found");
});

// Handler for 500 - Internal Server Error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, "./public/500.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});
