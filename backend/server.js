const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB bağlı"))
  .catch((err) => console.log(err));

// Örnek API rotası
app.get("/", (req, res) => {
  res.send("Backend'den merhaba!");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
