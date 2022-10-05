import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv'
import { apiRouter } from './routes/api.js';

const app = express();

dotenv.config({ path: '../.env.development' });

// We are using our packages here
// to support JSON-encoded bodies
app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({
  // to support URL-encoded bodies
  extended: true
}));

app.use(cors());

app.use("/", apiRouter);

//Start your server on a specified port
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})

export { app };