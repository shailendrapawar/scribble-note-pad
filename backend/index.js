
// const model=require('./config')
const express=require('express');
const app=express();

const mongooose=require('mongoose');

const userRoute=require('./routes/userRoute')
const cors=require('cors');
app.use(cors())


app.use(express.json());

app.use(userRoute)


app.listen(3000)
