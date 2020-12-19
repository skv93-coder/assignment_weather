import { TOGGLE_CITIES } from "./types";
export default function reducer(state, { type, payload }) {
  switch (type) {
    case TOGGLE_CITIES:
      // console.log(payload);
      return {
        ...state
        // onCurrPage: {
        //   ...state["onCurrPage"],
        //   currPage: payload
        //}
      };
    default:
      return state;
  }
}
