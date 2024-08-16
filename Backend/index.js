import express from "express";
import http from 'http';
import { PORT } from "./common/configs.js";
import { connectDB } from "./common/db.js";
import router from "./routes/routes.js";
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1",router);

server.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
})

connectDB();