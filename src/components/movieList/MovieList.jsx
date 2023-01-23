import React from 'react'
import styled from 'styled-components'
import { MovieItem } from './movieItem/MovieItem'


export const MovieList = ({movies, setMovies}) => {
  return (
   <ListContainer>
    {
      movies.map((elem)=> (
      <MovieItem
       key={elem.title}
       movie={elem}
       setMovies={setMovies}
       movies={movies}
       />
     ))
    
    }
   </ListContainer>
  )
  
}

const ListContainer = styled.ul`
width: 60%;
margin: 1.6rem auto;
`