export const ACTIONS = {
    TRONGCAY: 'TRONGCAY',
    TIEN: 'TIEN',
    NOTIFY: 'NOTIFY',
    TIENQUAMAN: 'TIENQUAMAN',
    QUAMAN: 'QUAMAN'
}
export const trongCay = (data, viTri, ruong, dispatch, tien) => {
    let today = new Date(),
        date = today.getTime();

    if (ruong[viTri] !== undefined) {
        return {
            type: ACTIONS.NOTIFY, payload: {
                type: "warning",
                notify: "Chổ này trồng rồi"
            }
        }
    }

    if (tien < data.giatien) {
        return {
            type: ACTIONS.NOTIFY, payload: {
                type: "warning",
                notify: "Hết tiền ròi má"
            }
        }
    } else {
        dispatch({ type: ACTIONS.TIEN, payload: tien - data.giatien })
    }

    let ruongTemp = ruong
    ruongTemp[viTri] = {
        ...data,
        ngayTrong: date,
        daTinhGio: true,
        thanhCayNon: false,
        thanhCayTruongThanh: false,
        soLanThuHoach: 0
    }

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
};

export const tinhGio = (viTri, ruong) => {
    let ruongTemp = ruong
    ruongTemp[viTri] = {
        ...ruongTemp[viTri],
        daTinhGio: false
    }

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
}

export const thanhCayNon = (viTri, ruong) => {
    let ruongTemp = ruong
    ruongTemp[viTri] = {
        ...ruongTemp[viTri],
        thanhCayNon: true
    }

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
}

export const thanhCayTruongThanh = (viTri, ruong, dispatch) => {
    let ruongTemp = ruong
    ruongTemp[viTri] = {
        ...ruongTemp[viTri],
        thanhCayTruongThanh: true,
        thanhCayNon: false
    }

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
}

export const thuHoachCay = (viTri, ruong, dispatch, tien, tienQuaMan) => {
    if (!ruong[viTri].thanhCayTruongThanh) {
        return {
            type: ACTIONS.NOTIFY, payload: {
                type: "warning",
                notify: "Cây chưa trưởng thành!!"
            }
        }
    }

    if (parseInt(tien) + parseInt(ruong[viTri].giathuhoach) > tienQuaMan) {
        return { type: ACTIONS.QUAMAN, payload: true }
    }

    dispatch({ type: ACTIONS.TIEN, payload: parseInt(tien) + parseInt(ruong[viTri].giathuhoach) })

    let today = new Date(),
        date = today.getTime();

    let ruongTemp = ruong

    if (ruong[viTri].soLanThuHoach >= 2) {
        ruongTemp[viTri] = undefined
    } else {
        ruongTemp[viTri] = {
            ...ruongTemp[viTri],
            soLanThuHoach: ruong[viTri].soLanThuHoach + 1,
            thanhCayTruongThanh: false,
            thanhCayNon: true,
            daTinhGio: true,
            lanThuHoachGanNhat: date,
        }
    }

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
}