import React from 'react'

function Home(props,background) {
    return (
        <div className="container">
            <h3> WELCOME ! </h3>
            <img  className="img-fluid" src={require("../images/64857.jpg")} alt="Logo" />
        </div>
    )
}
export default Home;
