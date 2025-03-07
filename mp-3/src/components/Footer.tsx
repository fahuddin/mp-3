import styled from 'styled-components';


const StyledFooter = styled.footer`
background-color: maroon;
    color: blueviolet;
    padding: 1vh 1vw;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
 a{
   color: blueviolet;
    text-decoration: none;


    
    }
 

`


export default function Footer(){
return (
    <StyledFooter>
        <p>All rights reserved by Fahim Uddin. <a href="credits.html">Credits</a> &copy;</p>
    </StyledFooter>







);



}