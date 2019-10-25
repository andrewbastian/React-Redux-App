import React, {useEffect} from 'react';
import PlayerCard from './PlayerCard';
import { fetchRoster } from '../actions/roster';
import { connect } from "react-redux";

function Roster(props) {
  useEffect(()=>{
    props.fetchRoster()
  },[])

  return (
    <div>
{props.players.map(player => {
  return <PlayerCard player={player}/>
})}
    </div>
  );
}

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = {
  fetchRoster
}
// notice how "mapDispatchToProps" is optional.
// since we're not calling action creators here, we don't need it.
export default connect(mapStateToProps, mapDispatchToProps)(Roster);
