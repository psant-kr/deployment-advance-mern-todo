import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Routes from './routes/route.js';

const PORT = process.env.PORT || 8000

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Routes);

app.get("/", (req, res) => {
    res.json("HELLO...");
})

// const PORT = 8000;

Connection();

app.listen(PORT, () => console.log(`Your server is running sucessfully on PORT ${PORT}`));