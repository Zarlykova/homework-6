import React, { useState } from 'react'
// import { useRef } from 'react'
import styled from 'styled-components'
import { Modal } from '../UI/modal/Modal'
// import { Button } from '../UI/button/Button'
import { MovieForm } from './movieForm/MovieForm'


export const MovieHeader = ({addNewMovie}) => {
 const [addMovieRef, setAddMovieRef] = useState(false)

const openMovieForm = () => {
  setAddMovieRef(prevState => !prevState)
}

  return (
    <StyledMovieHeader>
     <h3>Favorite Movies</h3>

     {
     addMovieRef ? <Modal onClose={openMovieForm} > <MovieForm addNewMovie={addNewMovie} onClose={openMovieForm}/> </Modal> : <Button onClick={openMovieForm}>Add Movie</Button> 
     }
  

    </StyledMovieHeader>
  )
}

const StyledMovieHeader = styled.div`
 background-color: #070782;
 color: white;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-left: 15px;
 padding-right:15px;
`
const Button = styled.button`
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 20px;
  background-color: #ec700a;

  &:hover{
    background-color: #e68c43;
  }
`