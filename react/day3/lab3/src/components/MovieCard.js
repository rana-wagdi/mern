import React from 'react'
import { Link } from 'react-router-dom'

export default function MovieCard({movie}) {
  return (
    <div className="card h-100" >
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} /> 
 <div className="card-body">
   <p className="card-title">{movie.title}</p> 
   <p className="card-title">{movie.overview}</p> 
    {/* <p className="card-text">{product.price}</p> */}
   <Link to={`/movies/${movie.id}`} className="btn btn-primary">Details</Link>
 </div> 
</div>
  )
}
