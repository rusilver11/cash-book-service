import express from "express";
import route from "./app/routes/index.js";
import db from "./app/config/connectionDatabase.js";
const server = express();

try {
  await db.authenticate();
  console.log('Database Connected');
} catch (error) {
  console.error(error);
}

server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(route);

server.get("/", (req, res) =>{
  res.send("Service API");
});

const port = 3000;
server.listen(port,()=> console.log('Server is now running at port', port));