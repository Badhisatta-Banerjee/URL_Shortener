import express from 'express'
import path from 'path'
import ejs from 'ejs'
import urlRout from './routes/url.js'
import shortIdRoute from './routes/shortid.js'
import analyticsRoute from './routes/getAnalytics.js'
import staticRouter from './routes/staticRouter.js'
import { connectToMongoDB } from './connection.js';

const app = express();
const PORT = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//MongoDB
connectToMongoDB('mongodb://localhost:27017/short-url').then(() => {
    console.log("MongoDB Connected");
}).catch((error) => {
    console.error("Not Connected to MongoDB", error);
})

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//Routes
app.use('/url', urlRout);
app.use('/analytics', analyticsRoute);
app.use('/shortid', shortIdRoute);
app.use('/',staticRouter);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
});