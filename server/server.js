import 'dotenv/config';
import express from 'express';
import cors from'cors';
import connectDB from './configs/dbConnection.js';
import userRouter from './routes/userRoutes.js';
import imageRouter from './routes/imageRoutes.js';

const PORT = process.env.PORT || 9000;
const app = express()
await connectDB()

app.use(express.json());
app.use(cors())

app.get('/', (req, res)=> res.send("API is Working .."));
app.use('/api/user', userRouter);
app.use('/api/image', imageRouter);

app.listen(PORT, ()=>{
    console.log(`Server is up and running on port http://localhost:${PORT}`)
})