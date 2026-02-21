require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const cookieParser = require('cookie-parser');

const products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors = require("cors");
const router = require("./routes/router");

app.use(express.json());
app.use(cookieParser());  // 👈 removed empty string
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(router);

const port = 8005;

app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});

const axios = require('axios');

app.get('/proxy-image', async (req, res) => {
    try {
        const imageUrl = req.query.url;
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Referer': 'https://www.amazon.in'
            }
        });
        res.set('Content-Type', response.headers['content-type']);
        res.set('Cache-Control', 'public, max-age=86400');
        res.send(response.data);
    } catch (error) {
        res.status(404).send('Image not found');
    }
});

DefaultData();