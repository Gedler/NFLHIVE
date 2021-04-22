import styled from "styled-components";


const TitleHeader = styled.div`
        text-align: center;
        color: red;
        background-color: rgba(0, 0, 255, 70%);
        padding: 10px;
        `

function TitleBanner() {
    
    console.log("Hello, World!")
        return ( 
            <TitleHeader>
                <h1 style={{margin: 0}}>NFLHIVE</h1>
            </TitleHeader>
        )
}




export default TitleBanner;