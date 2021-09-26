import { useGame } from '../../context/GameContext'
import Fields from './Fields'
import ThanhCongCu from './ThanhCongCu'
import { useEffect } from 'react';
import { ACTIONS } from '../../context/Actions';

const Home = ({ children }) => {
    const { notify, dispatch } = useGame()

    useEffect(() => {
        dispatch({ type: ACTIONS.NOTIFY, payload: "" })
    }, [notify])

    let background = "https://firebasestorage.googleapis.com/v0/b/farm-e97ce.appspot.com/o/bg.png?alt=media&token=82686c14-7d32-4d17-8192-9d4e569371cf"
    return (
        <div className={notify ? "App giut" : "App"}>
            <img src={background} className="img-fluid" alt="logo" />
            <ThanhCongCu />
            <Fields />
        </div>
    )
}

export default Home
