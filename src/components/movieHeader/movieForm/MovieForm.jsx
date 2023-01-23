import React, { useRef } from 'react'
// import { useState } from 'react'
import styled from 'styled-components'
// import { Button } from '../../UI/button/Button'


export const MovieForm = ({ onClose, addNewMovie}) => {
  const titleInputRef = useRef("")
  const urlInputRef = useRef()
  const raitingInputRef = useRef()
  
  const submitMovie = () => {    

    const renderMovie = {
      title: titleInputRef.current.value,
      url: urlInputRef.current.value,
      raiting: raitingInputRef.current.value,
      id: Math.random().toString()
    }
   console.log(renderMovie);

      titleInputRef.current.value = ""
      urlInputRef.current.value = ""
      raitingInputRef.current.value = ""
   onClose() 
   addNewMovie(renderMovie)  
  }
 

  return (
    <StyledMovieForm>

     <StyledForm>

      <label htmlFor="title">Movie Title</label>
      <Input type="text" id='title' ref={titleInputRef}/>

      <label htmlFor="url">Image URL</label>
      <Input type="text" id='url' ref={urlInputRef}/>

      <label htmlFor="raiting">Your rating</label>
      <Input type="number" id='raiting' ref={raitingInputRef}/>

     </StyledForm>
   
     <Buttons>
      <CencelBtn onClick={onClose}>Cencel</CencelBtn>
      <AddBtn onClick={submitMovie}>Add</AddBtn> 
     </Buttons>
     

    </StyledMovieForm>
  )
}

const StyledMovieForm = styled.div`
 background-color: #fff;
 border-radius: 9px;
 padding: 10px;
 color: black;
 width: 100%;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
text-align: start;
margin-left: 10px;
`
const Input = styled.input`
margin: 10px 0;
border: 1px solid black;
padding: 8px;
`
const Buttons = styled.div`
display: flex;
justify-content: flex-end;
margin: 15px 0;
`
const CencelBtn = styled.button`
padding: 10px 25px;
background-color: #abd4ec;
color: blue;
border-radius: 8px;
border: none;

:hover{
 background-color: #96c0d8;
}
`
const AddBtn = styled.button`
padding: 10px 25px;
background-color: #19506f;
color: #ffffff;
margin-left: 15px;
border-radius: 8px;
border: none;

:hover{
 background-color: #1a6a99;
}
`