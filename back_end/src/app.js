import express from 'express'
import cors from "cors";
const app = express()

app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(
    express.urlencoded({
        extended: true,
        limit: "50mb",
    })
);
app.use(express.static("public"));

import userRoute from './routes/auth.route.js'
import notesRoute from './routes/notes.route.js'

app.use('/api/auth', userRoute);
app.use('/api/notes', notesRoute);

export { app };