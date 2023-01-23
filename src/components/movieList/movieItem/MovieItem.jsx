import React, { useState } from 'react'
import styled from 'styled-components'
import { DeleteModal } from '../../UI/deleteModal/DeleteModal';
import { Modal } from '../../UI/modal/Modal';


export const MovieItem = ({movie, setMovies, movies}) => {
 const [deleteModal, setDeleteModal] = useState(false)
console.log(movie);
 const {title, url, raiting} = movie;

 const toggleDeleteModal = () =>{
  setDeleteModal((prevState) => !prevState)
 }
  return (
    <List>
     <div>
      <Img src={url} />
     </div>
      <MoviesInfo>
       <h4>{title}</h4>

       <MoviesItems>
        <PItem>{raiting}/5 stars</PItem>
        {
         deleteModal ? <Modal 
         onClick={toggleDeleteModal}>
          <DeleteModal    
          setMovies={setMovies}
          movies={movies}
          movie={movie}
          onClose={toggleDeleteModal} />
         </Modal> : ""
        }
        <Button onClick={toggleDeleteModal}>DELETE</Button>
        
       </MoviesItems>

      </MoviesInfo>
    </List>
  )
}

const List = styled.li`
display: flex;
justify-content: flex-start;
border-radius: 9px;
box-shadow: 2px 3px 3px gray;
color: black;
margin-bottom: 20px;
`
const MoviesInfo = styled.div`
margin-left: 30px;
`
const MoviesItems = styled.div`
display: flex;
flex: 2;
align-items: center;
`
const PItem = styled.p`
background-color: #ff9100;
padding: 10px 20px;
border-radius: 20px;
margin-right: 20px;
color: #fff;
align-items: center;
`
const Button = styled.button`
background-color: #d80808;
padding: 10px 25px;
border: none;
border-radius: 10px;
color: #fff;
`
const Img = styled.img`
 flex: 1;
overflow: hidden; 
height: 200px;
width: 300px;
object-fit: cover;
border-radius: 10px 0 0 10px;
`
