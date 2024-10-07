const express = require('express');
const bodyParser = require('body-parser'); 
const routes = require('./routes/reviewRoutes');
// const db = require('./models');
const port = process.env.PORT || 3000;

const app = express();

// Start jobs
// startJobs();

// Middleware to parse JSON bodies
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("Server running");
});

// app.use('/api', statsRoutes);

// db.sequelize.sync().then(() => {
//     console.log(`Database synced.`);
// });

module.exports = app;