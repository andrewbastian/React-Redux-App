import './App.css';

import React, {useEffect} from "react";
import { connect } from "react-redux";

import { PlayerCard } from "./components/PlayerCard";
import { Roster } from "./components/Roster";
import {fetchRoster} from './actions/roster'
import {player} from './reducers/roster'

function App(props) {
  useEffect(()=>{
    props.fetchRoster()
  },[])
  return (
    <div >
{player.map(player=>{
    return <PlayerCard
            key={player.id}
            player={player}
            />
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    player: state.roster.PLAYER
  };
}
const mapDispatchToProps = {
  fetchRoster
}
// notice how "mapDispatchToProps" is optional.
// since we're not calling action creators here, we don't need it.
export default connect(mapStateToProps, mapDispatchToProps)(App);
