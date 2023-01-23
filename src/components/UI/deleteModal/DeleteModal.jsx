import React from 'react'
import styled from 'styled-components'


export const DeleteModal = ({movies, setMovies, movie}) => {

 const confirmDelete = () => {
const filteredMovie = movies.filter((elem)=> elem.id !== movie.id)
 setMovies(filteredMovie)
 }
  return (
    <StyledDeleteModal>
     <Title>Are you sure you wanna delete ?</Title>
          <DisAgreeBtn>NO</DisAgreeBtn>
          <AgreeBtn onClick={confirmDelete}>YES</AgreeBtn>
    </StyledDeleteModal>
  )
}

const StyledDeleteModal = styled.div`
border-radius: 15px;
width: 80%;
height: 70%;
background-color: #ffffff;
margin: auto;


`
const Title = styled.p`
font-size: 25px;
font-weight: bold;
padding-top: 60px;
`
const AgreeBtn = styled.button`
margin-left: 10px;
padding: 8px 20px;
border: none;
background-color: #213e8f;
border-radius: 5px;
color: #fff;
font-weight: bold;
font-size: 20px;

&:hover{
 background-color: #939cb6;
}
`
const DisAgreeBtn = styled.button`
margin-right: 15px;
padding: 8px 20px;
border: none;
border-radius: 5px;
color: #6180d4;
font-weight: bold;
font-size: 20px;
margin-top:7rem;
margin-left:23rem;

&:hover{
 background-color: #5a6073;
 color: #fff;
}
`