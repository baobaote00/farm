import React from 'react'
import { useGame } from '../../../../context/GameContext'

const MoneyTools = () => {
    const { tien, tienQuaMan } = useGame()

    return (
        <div className="money-tools">
            <div className="wrap">
                <div className="money-tool__avatar">
                    <div className="money-to-next-level">{tienQuaMan}</div>
                </div>
                <div className="money-tool__monney">
                    <div className="wrap">
                        <div className="score"><span>SCORE</span></div>
                        <div className="money"><span>{tien}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoneyTools
