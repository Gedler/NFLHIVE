import styled from "styled-components";


const TitleHeader = styled.div`
        text-align: center;
        color: teal;
        background-color: rgba(255, 255, 255, 70%);
        padding: 10px;`

const Title = styled.h1`
    font-family: fantasy ;
    font-style: Copperplate ;
    font-size: 75px;`


    

function TitleBanner() {
    
    console.log("Hello, World!")
        return ( 
            <TitleHeader>
                <Title style={{margin: 0}}>N F L H I V E</Title>
            </TitleHeader>
        )
}




export default TitleBanner;