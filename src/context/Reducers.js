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
    default:
      return state;
  }
};

export default reducers;