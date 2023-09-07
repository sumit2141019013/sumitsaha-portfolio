import express from "express"
import cookieParser from "cookie-parser";
import path from "path";//ok
export const app=express();

app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(cookieParser());

import {userRouter} from "./routes/User1.js";
app.use("/api/v1",userRouter);

app.use(express.static(path.resolve("./frontend/build")));//ok

app.get("*", (req, res) => {//ok
  res.sendFile(path.resolve("./frontend/build/index.html"));//ok
});  //ok