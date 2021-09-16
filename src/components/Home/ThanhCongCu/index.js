import React from 'react'

const ThanhCongCu = () => {
    return (
        <div className="cong-cu">
            <img src={require("../../../img/thanhcongcudacat.png").default} className="img-fluid" alt="logo" />
            <div className="seed-tools">
                <div className="seed-tool"><img src={require('../../../img/hoahong.png').default} className="seed-img" alt="logo" /></div>
                <div className="seed-tool"><img src={require('../../../img/Cachua.png').default} className="seed-img" alt="logo" /></div>
                <div className="seed-tool"><img src={require('../../../img/caybap.png').default} className="seed-img" alt="logo" /></div>
                <div className="seed-tool"><img src={require('../../../img/Carott.png').default} className="seed-img" alt="logo" /></div>
            </div>
        </div>
    )
}

export default ThanhCongCu
