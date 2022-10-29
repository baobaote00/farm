import { useGame } from 'context/GameContext'
import Seed from './Seed'

const SeedTools = () => {
    const { cay, man, manThu } = useGame()

    return (
        <div className="seed-tools">
            {man[manThu].loaicay.map((e, k) =>
                (cay[e] ? <Seed key={k} data={cay[e]} /> : <Seed key={k} />)
            )}
        </div>
    )
}

export default SeedTools
