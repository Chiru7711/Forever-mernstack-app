import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App Config
dotenv.config()
const app = express();
const port = process.env.PORT || 5000;
connectDB()
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API  Endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
    res.send('API Working!');
})

app.listen(port, () => console.log('Server listening on port: ' + port));

