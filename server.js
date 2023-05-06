const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));


mongoose.connect('mongodb+srv://shreejamehta2002:mw2zwhfSmsua90Sc@otp.8axvijr.mongodb.net/sampleData', {useNewUrlParser: true, useUnifiedTopology: true});

//create data schema 
const movieSchema = new mongoose.Schema({
    title: String,
    releasedate: Date,
    summary: String,
    storyline: String,
    genres: String,
    languages: String,
    runtime: String,
    videos: String,
    photos: String,
    awards: String,
    cast: String,
    director: String,
    writer: String,
    budget: String,
    boxofficecollection: String,
    region: String
  });

const Movie = mongoose.model('movies', movieSchema);

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/', (req, res)=>{
    let newMovie = new Movie({
        title: req.body.title,
        releasedate: req.body.releasedate,
        summary: req.body.summary,
        storyline : req.body.storyline,
        genres: req.body.genres,
        languages: req.body.languages,
        runtime: req.body.runtime,
        videos: req.body.videos,
        photos: req.body.photos,
        awards: req.body.awards,
        cast: req.body.cast,
        director: req.body.director,
        writer: req.body.writer,
        budget: req.body.budget,
        boxofficecollection: req.body.boxofficecollection,
        region: req.body.region
    });
    console.log(newMovie);
    newMovie.save();
    res.redirect('/');
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});