import { createContext, useContext, useEffect, useReducer, useState } from "react";
import reducers from './Reducers';
import { ACTIONS } from "./Actions";
// eslint-disable-next-line
import { app } from "components/Firebase";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getDatabase, ref, get, child } from "firebase/database";

export const GameContext = createContext();

export const useGame = () => {
    return useContext(GameContext);
}

const GameContextProvider = ({ children }) => {

    const auth = getAuth();

    useEffect(() => {
        const setUserCurrent = setTimeout(() => {
            console.log(auth.currentUser.uid);
            if (!auth.currentUser) {
                signInAnonymously(auth)
                    .then((user) => {
                        dispatch({ type: ACTIONS.USER, payload: user })
                        console.log(user.uid);
                    })
                    .catch((error) => {
                        console.log(error.code);
                        console.log(error.message);
                    });
            } else {
                dispatch({ type: ACTIONS.USER, payload: auth.currentUser })
            }
        }, 1000);
        return () => {
            clearTimeout(setUserCurrent)
        }
    }, [auth])

    const [man, setMan] = useState()
    const [cay, setCay] = useState()

    const dbRef = ref(getDatabase());
    useEffect(() => {
        get(child(dbRef, `man`)).then((snapshot) => {
            if (snapshot.exists()) {
                setMan(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        get(child(dbRef, `cay`)).then((snapshot) => {
            if (snapshot.exists()) {
                setCay(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [dbRef])

    const initialState = { ruong: new Array(18), manThu: 0, tien: 0, notify: "", tienQuaMan: 0, level: null, user: null };
    const [state, dispatch] = useReducer(reducers, initialState);

    const { ruong, manThu, tien, notify, tienQuaMan, user } = state

    useEffect(() => {
        const setTienTimeout = setTimeout(() => {
            if (user) {
                get(child(dbRef, user.uid)).then((snapshot) => {
                    if (snapshot.exists()) {
                        dispatch({ type: ACTIONS.TIEN, payload: snapshot.val().tien })
                        dispatch({ type: ACTIONS.TIENQUAMAN, payload: snapshot.val().tienQuaMan })
                        let arrTemp = snapshot.val().ruong
                        let arr = new Array(18)
                        if (arrTemp && !Array.isArray(arrTemp)) {
                            arr[Object.keys(arrTemp)[0]] = arrTemp[Object.keys(arrTemp)[0]]
                        } else {
                            arrTemp && arrTemp.map((e, k) => {
                                arr[k] = e
                                return null
                            });
                        }
                        dispatch({ type: ACTIONS.TRONGCAY, payload: arr })
                    } else {
                        console.log("No data available");
                    }
                }).catch((error) => {
                    console.error(error);
                });
            } else {
                dispatch({ type: ACTIONS.TIEN, payload: man && man[manThu].tienbandau })
                dispatch({ type: ACTIONS.TIENQUAMAN, payload: man && man[manThu].tienquaman })
            }
            dispatch({ type: ACTIONS.LEVEL, payload: man && man })
        }, 1500);
        return () => {
            clearTimeout(setTienTimeout)
        }
    }, [man, manThu, user, dbRef])

    const value = {
        cay,
        man,
        tien,
        manThu,
        ruong,
        dispatch,
        notify,
        tienQuaMan
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider;