import React from 'react';
import { connect } from 'react-redux';
import { NavBar, Loading } from '../_components'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames';
import { Paper } from '@material-ui/core';


export class HomePage extends React.Component {
    

    componentDidMount() {
        
    }

    render() {
        
        return(
            <NavBar>
                <Grid container justify="center" alignItems="center" style={{flexGrow: 1}}>
                    <Grid item xs={11} md={10} lg={9} xl={8}>
                        <Paper className='placeholder' style={{height: '180px'}}>

                        </Paper>
                    </Grid>
                </Grid>    
            </NavBar>
        )
    }
}
