import dotenv from "dotenv"
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from 'cors'
var app = express();
dotenv.config();
var app = express();

import AuthRouter from './routes/auth.js'
import UserRouter from './routes/user.js'
import LoanRouter from './routes/loan.js'

process.on("SIGINT", () => {
    console.log(`Exiting application `);
    process.exit(0);
});

let corsDomains = process.env.CORS_ALLOWED_DOMAINS;
if (corsDomains) corsDomains = corsDomains.split(",");

app.use(cors({ origin: corsDomains, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(cookieParser());

var listener = app.listen(process.env.PORT, function () {
    console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

// Public route
app.get("/", (req, res) => {
    res.send("Ippo Pay Bank API Service is up!")
    res.status(200).end()
});

app.use('/auth', AuthRouter);
app.use('/user', UserRouter);
app.use('/loan', LoanRouter);