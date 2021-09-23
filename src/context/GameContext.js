import { createContext, useContext, useReducer } from "react";
import reducers from './Reducers';

export const GameContext = createContext();

export const useGame = () => {
    return useContext(GameContext);
}

const GameContextProvider = ({ children }) => {

    const db = require("../database.json")

    const { cay, man } = db

    const initialState = { ruong: new Array(18), manThu: 0, tien: 0 };
    const [state, dispatch] = useReducer(reducers, initialState);

    const { ruong, manThu, tien } = state

    const value = {
        state,
        cay,
        man,
        tien,
        manThu,
        ruong,
        dispatch
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;