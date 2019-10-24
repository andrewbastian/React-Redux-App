import {FETCH_SONICS, FETCH_SONICS_SUCCESS, FETCH_SONICS_ERROR} from "../actions/roster"

const initialState = {
AGE: '33',
BIRTH_DATE: "JUN 30, 1985",
EXP: "13",
HEIGHT: "6-8",
LeagueID: "00",
NUM: "1",
PLAYER: "Trevor Ariza",
PLAYER_ID: 2772,
POSITION: "F-G",
SCHOOL: "UCLA",
SEASON: "2017",
TeamID: '1610612745',
WEIGHT: "215",
isLoading: false,
error: null,
};

export function reducer (state = initialState, action) {
  switch(action.type) {
    case FETCH_SONICS:
      return{
        ...state,
        isLoading:true
      }
      case FETCH_SONICS_SUCCESS:
        return{
          ...state,
          PLAYER: action.payload,
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
