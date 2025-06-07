import express from "express";
import movieRoutes from "./routes/movies.route.js";

const app = express();
const Port = 7000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello, World!" });
});

// CRUD FUNCTIONALITY OF MOVIES
app.use("/movies", movieRoutes);

// Start the server
app.listen(Port, () => {
  console.log(`The server is running at http://localhost:${Port}`);
});
