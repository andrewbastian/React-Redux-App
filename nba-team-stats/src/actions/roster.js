import axios from "axios";
import { teamRoster } from 'nba-api-client';
export const FETCH_SONICS = "FETCH_SONICS"
export const FETCH_SONICS_SUCCESS = "FETCH_SONICS_SUCCESS"
export const FETCH_SONICS_ERROR = "FETCH_SONICS_ERROR"

export function fetchRoster() {

    return (dispatch) => {

        dispatch({ type: FETCH_SONICS })
        const nba = require('nba-api-client');
        nba.teamRoster({ TeamID: 1610612745, Season: '2017-18' })
            .then((data) => {
                console.log(data.CommonTeamRoster)
                console.log("data", data)
                const playersObj = data.CommonTeamRoster;
                const playersArr = Object.values(playersObj)

                dispatch({ type: FETCH_SONICS_SUCCESS, payload: playersArr })
            })

            .catch(err => {
                dispatch({ type: FETCH_SONICS_ERROR, payload: err })
            })
    }
}
