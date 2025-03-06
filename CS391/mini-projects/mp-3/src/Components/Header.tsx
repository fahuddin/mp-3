import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding:   1vh 2vw;
    background-color: saddlebrown;
    color:white;

  @media (max-width: 750px){
  align-items: center;

  
  }

`



export default function Header(){

    return (
        <StyledHeader>
         <h1>Fahim Uddin</h1>
         <p>My 2025 Resume</p>
        </StyledHeader>
            
    );
}