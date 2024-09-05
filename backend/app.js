// import express from 'express'
// import {userRouter} from './routes/User.js'
// import cookieParser from "cookie-parser";
// import cors from 'cors'
// export const app=express();

// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ extended: true, limit: "50mb" }));
// app.use(cookieParser());
// app.use(cors())


// app.use("/api/v1",userRouter)

import express from 'express';
import { userRouter } from './routes/User.js'; // Ensure this path is correct
import cookieParser from 'cookie-parser';
import cors from 'cors';

export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

// Set CORS configuration if needed
app.use(cors({
  origin: 'https://portfolio-3-aylq.onrender.com', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

// Use the router
app.use("/api/v1", userRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

