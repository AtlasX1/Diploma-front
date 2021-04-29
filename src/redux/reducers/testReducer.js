import { TEST_REQUEST, TEST_SUCCESS, TEST_ERROR } from "../actions/testActions";

const initialState = {
  data: {
    testNameData: "Test",
  },
  count: 0,
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_REQUEST:
      return {
        ...state,
        data: action.data,
      };

    case TEST_SUCCESS:
      return {
        ...state,
        data: action.data,
      };

    case TEST_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
export default testReducer;
