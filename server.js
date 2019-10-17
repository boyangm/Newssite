require("dotenv").config();
 const express = require('express');
 const axios = require('axios');
 const app = express();
 newsPassword = process.env.NewsAPI_Key;
 app.use(express.json());
 var PORT = process.env.PORT || 5000;
  app.get('/api/posts', (req,res) =>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsPassword}`)
    .then( response =>{
        console.log(response.data)
        res.json(response.data.articles);
    })
  })
 app.listen(PORT, () =>{
     console.log(`server connected to port ${PORT}`);
 })