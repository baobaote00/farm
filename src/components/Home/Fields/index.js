import ruongImg from '../../../img/ruong.png';
import Field from './Field';
import { useGame } from './../../../context/GameContext';

const Fields = () => {
    const { ruong } = useGame()

    const Cay = ({ ruong }) => {
        let fields = []
        for (let i = 0; i < ruong.length; i++) {
            const element = ruong[i];
            fields.push(<Field key={i} viTri={i} data={element}/>)
        }
        return fields
    }

    return (
        <div className="ruong">
            <img src={ruongImg} className="ruong-chil" alt="logo" />
            <img src={ruongImg} className="ruong-chil" alt="logo" />
            <img src={ruongImg} className="ruong-chil" alt="logo" />
            <img src={ruongImg} className="ruong-chil" alt="logo" />
            <img src={ruongImg} className="ruong-chil" alt="logo" />
            <img src={ruongImg} className="ruong-chil" alt="logo" />
            <div className="cay">
                <Cay ruong={ruong}/>
            </div>
        </div>
    )
}

export default Fields
