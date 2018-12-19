import React from 'react';
import Like from "./common/Like";

const MovieTable = (props) => {
    const {movies, onLike, onDelete} = props

    return ( 
        <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>

        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onLikeClick={() => onLike(movie)}
                />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie._id)}
                  className="btn btn-danger btn-sm"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     );
}
 
export default MovieTable;