import axios from "axios";
import {getPlayerId} from 'nba-api-client';
export const FETCH_SONICS = "FETCH_SONICS"
export const FETCH_SONICS_SUCCESS = "FETCH_SONICS_SUCCESS"
export const FETCH_SONICS_ERROR = "FETCH_SONICS_ERROR"

export function fetchRoster (){

  return (dispatch) =>{
    dispatch({ type: FETCH_SONICS })

    const nba = require('nba-api-client');
    nba.getTeamID("");
    nba.playerInfo({PlayerID: `${props.PLAYER_ID}`, Season: '2017-18'})
    .then(function(data){
	     console.log(data.Common)
       dispatch({ type: FETCH_SONICS_SUCCESS, payload: data.CommonTeamRoster})
     })
      .catch(err=>{
        dispatch({ type: FETCH_SONICS_ERROR, payload: err})
      })
  }
}
