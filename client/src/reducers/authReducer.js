import {
  TEST_DISPACH
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
    case TEST_DISPACH:
      return {
        ...state,
        user: action.payload
      }
      return state;
  }
}