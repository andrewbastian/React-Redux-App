import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
//import DeleteIcon from '@material-ui/icons/Delete'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(0),
    display: 'flex',
    justifyContent: 'space-between'

  },
  card: {
    width: '50%',
    minWidth: 275,
  },
}));

export function PlayerCard({ player, dispatch }){
  const classes = useStyles();

    console.log(player);
    return(
    <Card>
      <CardContent>
        <ListItemText>{player.PLAYER}</ListItemText>
      </CardContent>
    </Card>

    );
}
