import express from 'express'
import {userRouter} from './routes/User.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
export const app=express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors())


app.use("/api/v1",userRouter)
