require("dotenv").config();
 const express = require('express');
 const axios = require('axios');
 const path = require('path')
 const app = express();
 newsPassword = process.env.NewsAPI_Key;
 app.use(express.json());
 app.get('/api/posts', (req,res) =>{
     axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsPassword}`)
     .then( response =>{
         console.log(response.data)
         res.json(response.data.articles);
        })
    })
    if (process.env.NODE_env === 'production'){
        app.use(express.static('newssite/build'))
        app.get('*', (req, res) =>{
            res.sendFile(path.resolve(__dirname, 'newssite', 'build', 'index.html'))
        })
    }
    var PORT = process.env.PORT || 5000;
    app.listen(PORT, () =>{
     console.log(`server connected to port ${PORT}`);
 })