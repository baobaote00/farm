export const ACTIONS = {
    TRONGCAY: 'TRONGCAY',
    TIEN: 'TIEN',
    NOTIFY: 'NOTIFY',
    TIENQUAMAN: 'TIENQUAMAN'
}
export const trongCay = (data, viTri, ruong, dispatch, tien) => {
    let today = new Date(),
        date = today.getTime();

    if (ruong[viTri] !== undefined) {
        return { type: ACTIONS.NOTIFY, payload: "Chổ này trồng rồi" }
    }

    if (tien < data.giatien) {
        return { type: ACTIONS.NOTIFY, payload: "Hết tiền ròi má" }
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
    }

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
};

export const tinhGio = (viTri, ruong) => {
    let ruongTemp = ruong
    ruongTemp[viTri] = {
        ...ruongTemp[viTri],
        daTinhGio: false
    }

    console.log(ruongTemp);

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