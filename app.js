const express = require('express');
const mongoose  = require('mongoose');
const dotenv = require('dotenv');
const app =express();

app.use(express.json())

dotenv.config();

const MONGO_URI = process.env.MONGO_URL;


mongoose.connect(MONGO_URI,{}).then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));




const productRoutes = require('./routes/product');
app.use('/api', productRoutes)





const PORT = process.env.PORT ||3000;
app.listen(PORT,() => console.log(`Server running on port ${PORT}`));

