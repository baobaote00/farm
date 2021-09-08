import React from 'react'

const Home = ({children}) => {
    let background = "https://firebasestorage.googleapis.com/v0/b/farm-e97ce.appspot.com/o/bg.png?alt=media&token=e4e40d8a-f625-43c6-b6fa-e64a855f5d08"
    return (
        <div className="App">
            <img src={background} className="App-logo" alt="logo" />
            {children}
        </div>
    )
}

export default Home
