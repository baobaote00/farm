import { ACTIONS } from "./Actions";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.TRONGCAY:
      return {
        ...state,
        ruong: action.payload,
      };
    case ACTIONS.TIEN:
      return {
        ...state,
        tien: action.payload
      }
    case ACTIONS.TIENQUAMAN:
      return {
        ...state,
        tienQuaMan: action.payload
      }
    case ACTIONS.QUAMAN:
      return {
        ...state,
        manThu: state.manThu + 1,
        tien: state.level[state.manThu + 1].tienbandau,
        tienQuaMan: state.level[state.manThu + 1].tienquaman,
        ruong: new Array(18)
      }
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: action.payload
      }
    default:
      return state;
  }
};

export default reducers;