const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();
const userRouter = require('./routers/userRouter');
const petroRouter = require('./routers/petroRouter');
app.use(cors({origin:[`http://localhost:3000`,`http://localhost:3001`],credentials:true}));
dotenv.config({path:'./.env'});
app.use(express.json());
app.get('/',(req,res)=>{
    res.status(200).json('message sent')
})
app.use('/api/v1/user',userRouter);
app.use('/api/v1/petrostation',petroRouter);
module.exports = app;
