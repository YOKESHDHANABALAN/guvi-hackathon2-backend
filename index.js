import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';

import cors from 'cors';

import carsRouter from './routes/carsRoute.js';
import rentRouter from './routes/rentRoute.js';
import seedRouter from './routes/seedRoute.js';
import categoryRouter from './routes/typeRoute.js';
import userRouter from './routes/userRoute.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/api/seed/', seedRouter);
app.use('/api/cars/', carsRouter);
app.use('/api/users/', userRouter);
app.use('/api/rent/', rentRouter);
app.use('/api/category/', categoryRouter);

//Connect to DB
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {

    console.log("Connected to MongoDB");

}).catch((error) => {
    console.log(error.message);
})
app.get("/", (req, res) =>
  res.send(`Server Running`)
);
//Create Port
const port = process.env.PORT || 5000;
// if(process.env.NODE_ENV === 'production')
//  {
//      app.use('/' , express.static('client/build'))

//      app.get("*", (req, res) => {

//           res.sendFile(path.join(__dirname, 'client/build/index.html'))
       
//      });
//  }
app.listen(port, () => {
    console.log(`Server running Succesfully ${port}`);
})