import React from "react";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MoviesList({movie}){
 console.log(movie);
    return(
        <>
        <div className='col-xl-4 col-lg-4 col-sm-12 col-md-6'>
        <div className='movie-container'>
            <img src= { movie.image } alt={ movie.name } className='movie-poster' />
            <div className="movie-specs mt-2">
                <h3 className="movie-name"> { movie.name } </h3>
                <p className="movie-rating">⭐  { movie.rating } </p>
            </div>
            <p className="movie-summary">
            { movie.description } 
            </p>
        </div>
    </div>
    </>
    )
  }

export default function AddColor() {
    // const color = "skyblue";
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const movie = {
        name: name,
        image: image,
        rating: rating,
        description: description
    };
  
    //Array of string
    //  const colorList = ["orange", "crimson", "red","purple"];
    const [movieList, setMovieList] = useState([
            {
                name: "Jai Bhim",
                image: "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
                rating: "9.2",
                description: "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case"
            },{
                name: "RRR",
                image: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
                rating: "8.8",
                description: "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
            },{
                name: "Iron man 2",
                image: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
                rating: "7",
                description: "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
            }
    ]);
  
    return (
      <div>
        <div class="text-center mt-2">
            <TextField className="mt-2" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} /><br />
            <TextField className="mt-2" label="Image" variant="outlined" onChange={(e) => setImage(e.target.value)} /><br />
            <TextField className="mt-2" label="Rating" variant="outlined" onChange={(e) => setRating(e.target.value)} /><br />
            <TextField className="mt-2" label="Description" variant="outlined" onChange={(e) => setDescription(e.target.value)} /><br /><br />
            <Button className="mb-3" onClick={() => setMovieList([...movieList, movie] ) } variant="contained">Add Movies</Button>
        </div>
        <div className="container">
            <div className="row">
        {movieList.map((movie, index) => (
          <MoviesList key={index} movie={movie} />
        ))}
        </div>
        </div>
        {/* <ColorBox color= {colorList[0]} /> */} 
      </div>
    );
  }