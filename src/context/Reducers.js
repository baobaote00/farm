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