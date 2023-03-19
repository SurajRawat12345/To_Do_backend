dotenv.config();
import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import morgan from "morgan";
import cors from 'cors';
import allRoutes from './routes/todoRoutes.js'

const port = process.env.PORT || 8080;

// for deprication warning ........
mongoose.set('strictQuery', false); 

// Mongo DB Connection ..........
const dbUri = process.env.MONGO_URI;
mongoose.connect(dbUri , {useNewUrlParser : true , useUnifiedTopology : true})
.then((result) => {
    console.log("Connected To DB");
    app.listen(port , () => {
        console.log(`Server is running on port ${port}`);
    })
})
.catch((err) => console.log(err));

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/v1',allRoutes);
