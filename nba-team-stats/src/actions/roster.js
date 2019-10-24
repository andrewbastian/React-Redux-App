import axios from "axios";
import {getTeamID} from 'nba-api-client';
export const FETCH_SONICS = "FETCH_SONICS"
export const FETCH_SONICS_SUCCESS = "FETCH_SONICS_SUCCESS"
export const FETCH_SONICS_ERROR = "FETCH_SONICS_ERROR"

export function fetchRoster (){

  return (dispatch) =>{
    dispatch({ type: FETCH_SONICS })

    const nba = require('nba-api-client');
    nba.getTeamID("");
    nba.teamRoster({TeamID: 1610612745, Season: '2017-18'})
    .then(function(data){
	     console.log(data.CommonTeamRoster)
       dispatch({ type: FETCH_SONICS_SUCCESS, payload: data.CommonTeamRoster})
     })
      .catch(err=>{
        dispatch({ type: FETCH_SONICS_ERROR, payload: err})
      })
  }
}
