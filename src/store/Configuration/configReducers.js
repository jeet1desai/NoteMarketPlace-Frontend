import {
  CONFIG_REQUEST,
  CONFIG_FAILURE,
  USER_GET_COUNTRY_SUCCESS,
  USER_GET_CATEGORY_SUCCESS,
  USER_GET_NOTE_TYPE_SUCCESS,
  ADMIN_GET_CONFIG_SUCCESS,
  ADMIN_UPDATE_CONFIG_SUCCESS,
} from "./configActionTypes";

const initialState = {
  loading: false,
  country_list: [],
  category_list: [],
  note_type_list: [],
  config: null,
};

export function configReducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_GET_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        country_list: action.payload,
      };
    case USER_GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category_list: action.payload,
      };
    case USER_GET_NOTE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        note_type_list: action.payload,
      };
    case ADMIN_GET_CONFIG_SUCCESS:
    case ADMIN_UPDATE_CONFIG_SUCCESS:
      return {
        ...state,
        loading: false,
        config: action.payload,
      };
    case CONFIG_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
