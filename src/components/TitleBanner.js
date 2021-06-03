import styled from "styled-components";
import { Link } from 'react-router-dom'


const TitleHeader = styled.div`
    text-align: center;
    color: teal;
    background-color: rgba(255, 255, 255, 70%);
    padding: 10px;`

const Title = styled.h1`
    font-family: fantasy ;
    font-style: Copperplate;
    font-size: 75px;`

const StyledLink = styled(Link)`
    color: teal;
    text-decoration: none;`

    

function TitleBanner() {
    
    console.log("Hello, World!")
        return ( 
            <TitleHeader>
                <Title style={{margin: 0}}><StyledLink to="/">N F L H I V E</StyledLink></Title>
            </TitleHeader>
        )
}




export default TitleBanner;