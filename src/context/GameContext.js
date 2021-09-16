import React, { createContext, useState, useContext } from "react";

export const GameContext = createContext();

export const useGame = () => {
    return useContext(GameContext);
}

const GameContextProvider = ({ children }) => {
    const [state, setState] = useState()
    const [loading, setLoading] = useState(false)

    const [ruong, setRuong] = useState([])

    const trongCay = () => {

    }

    const value = {
        state,
        loading,
        ruong,
        setRuong
    }



    return (
        <GameContext.Provider value={value}>
            {!loading && children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;