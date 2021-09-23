export const ACTIONS = {
    TRONGCAY: 'TRONGCAY',
    TIEN: 'TIEN'
}
export const trongCay = (data, viTri,ruong) => {
    let ruongTemp = ruong
    ruongTemp[viTri] = data

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
};