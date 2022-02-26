import React , {useContext} from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import { TripExpenseTrackerContext  } from '../../context/context'; 
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import Infocard from '../Infocard/Infocard';

const Main = () => {

    const classes = useStyles();
    const { balance } = useContext(TripExpenseTrackerContext);

  return (
        <Card className={classes.root} >
            <CardHeader title="Trip Expense Tracker" subheader="Power by Speechly" />
            <CardContent>
                <Typography align="center" variant='h5'>Total Balance ₹{balance} </Typography>
                <Typography variant="subtitle1" style={{ lineHeight : '1.5em', marginTop : '20px'}}>
                    <Infocard/>
                </Typography>
                <Divider className={classes.divider}/>
                    <Form/>
            </CardContent>
            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}  >
                    <Grid item xs={12} >
                        <List/>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
  );
}

export default Main