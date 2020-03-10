import ACTIONS from "../../constants/ACTIONS";

const initialState = {
  hodlCode: undefined,
  hodlStatus: {},
};

export default function hodlReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.BEGIN_HODL_MODE:
      return {
        ...state,
        hodlCode: action.hodlCode,
      };
    case ACTIONS.POLL_HODL_STATUS_SUCCESS:
      return {
        ...state,
        hodlStatus: action.hodlStatus,
      };

    default:
      return { ...state };
  }
}