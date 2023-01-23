import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'


export const Bakdrop = ({children, ...rest}) => {
 return (
  <>
  {
   createPortal(
    <>
      <StyledBakdrop {...rest}>{children}</StyledBakdrop>
    </>,
    document.getElementById('bakdrop')
   )
  }
  </>
 )
}


const StyledBakdrop = styled.div`
 background-color: rgba(0, 0, 0, 0.5);
 position: fixed;
 top: 0;
 bottom: 0;
 left: 0;
 right: 0;
 width: 100vw;
 height: 100vh;
 z-index: 10;
`
