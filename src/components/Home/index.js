import React from 'react'
import { useGame } from '../../context/GameContext'
import Ruong from './Ruong'
import ThanhCongCu from './ThanhCongCu'

const Home = ({ children }) => {
    const db = require("../../database.json")

    const { ruong, setRuong } = useGame()

    setRuong(db)

    console.log(ruong);

    let background = "https://firebasestorage.googleapis.com/v0/b/farm-e97ce.appspot.com/o/bg.png?alt=media&token=e4e40d8a-f625-43c6-b6fa-e64a855f5d08"
    return (
        <div className="App">
            <img src={background} className="img-fluid" alt="logo" />
            <ThanhCongCu />
            <Ruong />
        </div>
    )
}

export default Home
