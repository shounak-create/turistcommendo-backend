const express = require('express')

require('dotenv').config();

const app = express()

const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
});

app.get('',() =>{
    console.log("Server is running");
})
