import { useGame } from "context/GameContext"

const ThanhCongCuBottom = () => {

    const { manThu } = useGame()

    return (
        <div className="cong-cu-bottom">
            <div className="wrap">
                <img src={"https://firebasestorage.googleapis.com/v0/b/farm-e97ce.appspot.com/o/item1.png?alt=media&token=a16dc89d-e055-4579-9a20-82abb462c701"} className="img-fluid" alt="logo" />
                <div className="level">
                    <span>Level {manThu + 1}</span>
                </div>
            </div>
        </div>
    )
}

export default ThanhCongCuBottom
