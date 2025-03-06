import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledNav = styled.nav`
    width: 30%;

    @media (max-width: 750px){
     width: 100%;
    
    }


`;

const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: maroon;
    border: bisque solid 4px;
    font-size: calc(2px + 2vw);
    text-align: center;
    list-style: none;
    padding-left: 0;
    width: 100%;
    height:100%;

    @media (max-width: 750px){
    
    display: flex;
        flex-direction: row;
        padding: 0;
        justify-content: space-evenly;
    
    }

`

const StyledLi = styled.li`
    width: 90%;
    background-color: brown;
    border: chocolate solid 3px;
    padding: 2vh 0;
    margin: 5vh auto;
    font-size: calc(3px + 3vw);
    @media (max-width: 750px){
     font-size: calc(1px + 2vw);
        width: 100%;
        margin: 1% auto;
        height: auto;
        display: flex;
        justify-content: space-evenly;
        border: 2px darkblue solid;
    
    
    }

`

const StyledLink = styled(Link)`
 text-decoration: none;
 font-family: 'Art Nouveau', sans-serif;
 color: white;

`;




export default function Nav(){

    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to="/">Home</StyledLink></StyledLi>
                
                <StyledLi><StyledLink to="/education">Educations</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/experiences">Experiences</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/projects">Projects</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/certifications">Certifications</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/references">References</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}