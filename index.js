import express from 'express'
import urlRout from './routes/url.js'
import shortIdRoute from './routes/shortid.js'
import analyticsRoute from './routes/getAnalytics.js'
import { connectToMongoDB } from './connection.js';

const app=express();
const PORT=8000;

// Middleware
app.use(express.json());

//MongoDB
connectToMongoDB('mongodb://localhost:27017/short-url').then(()=>{
    console.log("MongoDB Connected");
}).catch((error)=>{
    console.error("Not Connected to MongoDB", error);
})

//Routes
app.use('/url',urlRout);
app.use('/',shortIdRoute);
app.use('/analytics',analyticsRoute);


app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}/`);
});