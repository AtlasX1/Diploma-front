import {
  ADD_DRUG_REQUEST,
  ADD_DRUG_SUCCESS,
  ADD_DRUG_ERROR,
  GET_ALL_DRUGS_REQUEST,
  GET_ALL_DRUGS_SUCCESS,
  GET_ALL_DRUGS_ERROR,
} from "../actions/drugsActions";

const initialState = {
  drugs: [],
  isLoading: false,
  error: "",
};

const drugsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DRUG_REQUEST:
      const tmp = [...state.drugs];
      tmp.push(action.data);
      return {
        ...state,
        drugs: [...tmp],
        isLoading: true,
      };

    case ADD_DRUG_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case ADD_DRUG_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case GET_ALL_DRUGS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ALL_DRUGS_SUCCESS:
      return {
        ...state,
        drugs: action.data,
        isLoading: false,
      };

    case GET_ALL_DRUGS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default drugsReducer;
