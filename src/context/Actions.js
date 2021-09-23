export const ACTIONS = {
    TRONGCAY: 'TRONGCAY',
}
export const trongCay = (data, viTri,ruong) => {
    let ruongTemp = ruong
    ruongTemp[viTri] = data

    return { type: ACTIONS.TRONGCAY, payload: ruongTemp };
};