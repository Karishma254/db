const http = require("http");
const express = require("express");

const Bottel = require("../router/routers")


const app = express();

const port = process.env.PORT || 7000;

const server = http.createServer(app);

app.use(express.json());

app.get("/", (req, res) => res.send("Success"));

app.use("/api", Bottel);

server.listen(port, () => {
  console.log(`local server started on http://localhost:${port}`);
});
  ;

