import React, {useEffect} from 'react';
import PlayerCard from './PlayerCard';
import { fetchRoster } from '../actions/roster';
import { connect } from "react-redux";

function Roster (props) {
  useEffect(()=>{
    props.fetchRoster()
  },[])
console.log('rosterProps',props.CommonTeamRoster);
  return (
    <div>
{Object.entries(props.CommonTeamRoster).map(PLAYER=>(
  <PlayerCard PLAYER={PLAYER}
    />
))}

    </div>
  );
}

function mapStateToProps(state) {
  return {
    CommonTeamRoster: state.CommonTeamRoster
  };
}
const mapDispatchToProps = {
  fetchRoster
}
// notice how "mapDispatchToProps" is optional.
// since we're not calling action creators here, we don't need it.
export default connect(mapStateToProps, mapDispatchToProps)(Roster);
