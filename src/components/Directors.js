import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorCards = directors.map(director => 
    {
    return (
    <div>
      {director.name}
      <ul>
        {director.movies.map(m => <li>{m}</li>)}
      </ul>
    </div>
  )})

  return (
    <div>
        <h1>Directors Page</h1>
        {directorCards}
    </div>
  );
}

export default Directors
