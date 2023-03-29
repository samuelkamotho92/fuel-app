const mongoose = require('mongoose');
const app = require('./index');
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('server')
    app.listen(process.env.PORT,()=>{
        console.log(`server running on port:${process.env.PORT}`)
    })
})