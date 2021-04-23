import React from 'react'



function HomePage () {
    return (
        <div style={{textAlign: 'center', color: 'teal', marginRight: '2%'}}>
            <h2 style={{display: 'block', fontFamily: 'fantasy', fontSize: '30px'}}>Fans Gather Here</h2>
            {/* <div style={{display: "grid", height: '100%'}}> */}
                <img style={{maxWidth: '100%', margin: "auto"}} src='https://www.htcinc.net/wp-content/uploads/2018/09/NFL-logos.jpg' alt="nfl-logos"></img>
            {/* </div> */}
        </div>
    )
}

export default HomePage