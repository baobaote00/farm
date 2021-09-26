export const ACTIONS = {
    TRONGCAY: 'TRONGCAY',
    TIEN: 'TIEN',
    NOTIFY: 'NOTIFY'
}
export const trongCay = (data, viTri, ruong, dispatch, tien) => {
    if (tien < data.giatien) {
        return { type: ACTIONS.NOTIFY, payload: "Hết tiền ròi má" }
    } else {
        dispatch({ type: ACTIONS.TIEN, payload: tien - data.giatien })
    }

    let ruongTemp = ruong
    ruongTemp[viTri] = data

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
};