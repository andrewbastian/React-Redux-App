import {FETCH_SONICS, FETCH_SONICS_SUCCESS, FETCH_SONICS_ERROR} from "../actions/roster"

const initialState = {
  CommonTeamRoster:[''],
  isLoading: false,
  error: ''
};

export function reducer (state = initialState, action) {
  console.log(state);
  switch(action.type) {
    case FETCH_SONICS:
      return{
        ...state,
        isLoading:true
      }
      case FETCH_SONICS_SUCCESS:
        return{
          ...state,
          CommonTeamRoster: action.payload,
          isLoading: false
        }
        case FETCH_SONICS_ERROR:
          return{
            ...state,
            error: action.payload,
            isLoading: false
          }
    default:
      return state;
  }
}
