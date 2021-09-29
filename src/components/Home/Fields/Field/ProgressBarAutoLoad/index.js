import React, { useEffect, useRef, useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useGame } from '../../../../../context/GameContext';
import { thanhCayNon, thanhCayTruongThanh, tinhGio } from './../../../../../context/Actions';

const ProgressBarAutoLoad = ({ data, viTri }) => {

    const { ruong, dispatch } = useGame()

    const countInterval = useRef(null);

    const [done, setDone] = useState(0)

    useEffect(() => {
        if (ruong[viTri].daTinhGio) {
            if (!ruong[viTri].thanhCayTruongThanh) {
                if (ruong[viTri].soLanThuHoach > 0) {
                    countInterval.current = setInterval(() => {
                        setDone((new Date().getTime() - data.lanThuHoachGanNhat) / data.thoigiantruongthanh)
                    }, 500);
                    return
                }

                if (ruong[viTri].thanhCayNon) {
                    countInterval.current = setInterval(() => {
                        setDone((new Date().getTime() - data.ngayTrong - data.thoigianthanhcaynon * 100) / data.thoigiantruongthanh)
                    }, 500);
                } else {
                    countInterval.current = setInterval(() => {
                        setDone((new Date().getTime() - data.ngayTrong) / data.thoigianthanhcaynon)
                    }, 500);
                }
            }
        }
        return () => {
            clearInterval(countInterval.current)
        }
    }, [ruong, viTri, dispatch, data.ngayTrong, data.thoigianthanhcaynon, data.thoigiantruongthanh])

    useEffect(() => {
        if (done > 100 && ruong[viTri].daTinhGio && !ruong[viTri].thanhCayNon) {
            dispatch(thanhCayNon(viTri, ruong));
            setDone(0)
        } else if (done > 100 && ruong[viTri].daTinhGio && !ruong[viTri].thanhCayTruongThanh) {
            dispatch(thanhCayTruongThanh(viTri, ruong));
            dispatch(tinhGio(viTri, ruong))
            setDone(0)
        }
    }, [done, dispatch, viTri, ruong])

    return <ProgressBar animated now={done} className="thoi-gian" />
}

export default ProgressBarAutoLoad
