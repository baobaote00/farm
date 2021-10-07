import { ACTIONS } from "./Actions";
// eslint-disable-next-line
import { app } from "components/Firebase";
import { getDatabase, ref, set } from "firebase/database";

const reducers = (state, action) => {
  const db = getDatabase()
  switch (action.type) {
    case ACTIONS.TRONGCAY:
      set(ref(db, state.user.uid), {
        ...state,
        level:null,
        user: null,
        notify: null,
        ruong: action.payload
      });
      return {
        ...state,
        ruong: action.payload,
      };
    case ACTIONS.TIEN:
      set(ref(db, state.user.uid), {
        ...state,
        level:null,
        user: null,
        notify: null,
        tien: action.payload
      });
      return {
        ...state,
        tien: action.payload
      }
    case ACTIONS.TIENQUAMAN:
      set(ref(db, state.user.uid), {
        ...state,
        level:null,
        user: null,
        notify: null,
        tienQuaMan: action.payload
      });
      return {
        ...state,
        tienQuaMan: action.payload
      }
    case ACTIONS.QUAMAN:
      set(ref(db, state.user.uid), {
        ...state,
        level:null,
        user: null,
        notify: null,
        manThu: state.manThu + 1,
        tien: state.level[state.manThu + 1].tienbandau,
        tienQuaMan: state.level[state.manThu + 1].tienquaman,
        ruong: new Array(18)
      });
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
    case ACTIONS.USER:
      return {
        ...state,
        user: action.payload
      }
    case ACTIONS.LEVEL:
      return {
        ...state,
        level: action.payload
      }
    default:
      return state;
  }
};

export default reducers;