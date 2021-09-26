import React from 'react'
import { useGame } from '../../../../context/GameContext'

const MoneyTools = () => {
    const { tien } = useGame()

    return (
        <div className="money-tools">
            <div className="wrap">
                <div className="money-tool__avatar">

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
