import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import greenTick from '../../../assets/images/greenTick.png'
import redCross from '../../../assets/images/redCross.png'



const StyledTableRow = withStyles((theme) => ({
  root: {
      backgroundColor: theme.palette.action.hover,
  },
}))(TableRow);

const useStyles = makeStyles({
    
      imageTable: {
        width: '100%',
        height: 'auto',
        maxWidth: '10vw'
    },
    imageTick: {
        width: '100%',
        height: 'auto',
        maxWidth: '2vw'
    },
});

const TableRowFeatures = props => {
        const classes = useStyles();
        return (
            props.odd ?   
            <StyledTableRow>
                <TableCell>{props.text}</TableCell>
                <TableCell align="center"><img src={props.green ? greenTick : redCross} className={classes.imageTick} alt="HytechSolutionsTick"/></TableCell>
                <TableCell align="center"><img src={greenTick} className={classes.imageTick} alt="HytechSolutionsTick"/></TableCell>    
            </StyledTableRow> : 
            <TableRow>
                <TableCell>{props.text}</TableCell>
                <TableCell align="center"><img src={props.green ? greenTick : redCross} className={classes.imageTick} alt="HytechSolutionsTick"/></TableCell>
                <TableCell align="center"><img src={greenTick} className={classes.imageTick} alt="HytechSolutionsTick"/></TableCell>    
            </TableRow>
        );
    
}

export default TableRowFeatures;
