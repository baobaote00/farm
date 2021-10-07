import { useGame } from 'context/GameContext'
import Fields from './Fields'
import ThanhCongCu from './ThanhCongCu'
import { useEffect } from 'react';
import { ACTIONS } from 'context/Actions';
import { ToastContainer, toast } from 'react-toastify';
import ThanhCongCuBottom from './ThanhCongCuBottom';

const Home = () => {
    const { notify, dispatch } = useGame()


    useEffect(() => {
        if (notify !== "") {
            switch (notify.type) {
                case 'info':
                    toast.info(notify.notify)
                    break;
                case 'success':
                    toast.success(notify.notify)
                    break;
                case 'warning':
                    toast.warning(notify.notify)
                    break;
                case 'default':
                    toast(notify.notify)
                    break;
                case 'error':
                    toast.error(notify.notify)
                    break;
                default:
                    break;
            }
        }
        dispatch({ type: ACTIONS.NOTIFY, payload: "" })
    }, [notify, dispatch])

    let background = "https://firebasestorage.googleapis.com/v0/b/farm-e97ce.appspot.com/o/bg.png?alt=media&token=82686c14-7d32-4d17-8192-9d4e569371cf"
    // let background = "https://firebasestorage.googleapis.com/v0/b/farm-e97ce.appspot.com/o/bgg.png?alt=media&token=27a45bd8-78a1-4623-afc1-143711bb45ff"
    return (
        <div className="App">
            <img src={background} className="img-fluid" alt="logo" />
            <ThanhCongCu />
            <Fields />
            <ThanhCongCuBottom />
            <ToastContainer
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default Home
