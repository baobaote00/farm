import { createContext, useContext, useEffect, useReducer } from "react";
import reducers from './Reducers';
import { ACTIONS } from "./Actions";

export const GameContext = createContext();

export const useGame = () => {
    return useContext(GameContext);
}

const GameContextProvider = ({ children }) => {

    const db = require("../database.json")

    const { cay, man } = db

    const initialState = { ruong: new Array(18), manThu: 0, tien: 0, notify: "" };
    const [state, dispatch] = useReducer(reducers, initialState);

    const { ruong, manThu, tien, notify } = state

    useEffect(() => {
        dispatch({ type: ACTIONS.TIEN, payload: man[manThu].tienbandau })
    }, [man, manThu])

    const value = {
        state,
        cay,
        man,
        tien,
        manThu,
        ruong,
        dispatch,
        notify
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;