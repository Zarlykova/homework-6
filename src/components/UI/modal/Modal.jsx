import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { Bakdrop } from '../bakdrop/Bakdrop'



export const Modal = ({children, onClose, ...rest }) => {
  return (
    <>
    {
     createPortal( 
      <>
      <Bakdrop onClick={onClose}/>
      <StyledModal {...rest}>{children}</StyledModal>
      </>,
      document.getElementById('modal')
     )
    }
    </>
   )}




const StyledModal = styled.div`
position: absolute;
top: 50%;
right: 50%;
left: 50%;
box-sizing: border-box;
transform: translate(-50%, -50%);
width: 50%;
height: 400px;
text-align: center;
z-index: 100;
`