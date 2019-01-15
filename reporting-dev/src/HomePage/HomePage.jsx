import React from 'react';
import { connect } from 'react-redux';
import { NavBar, Loading } from '../_components'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import classNames from 'classnames';
import { Paper } from '@material-ui/core';
import { SearchBar } from '../_components/SearchBar';
import { ReportsList } from './ReportList';


class HomePage extends React.Component {
    

    componentDidMount() {
        
    }

    render() {

    const allCommunities = [
        "PARC"
    ]
        
        return(
            <NavBar logout={true}>
                <Grid container justify="flex-start">
                    <Grid container item xs={12} justify="space-around" style={{height: '100px'}}>
                        <Grid item xs={11} sm={10} md={8} lg={6} style={{margin: 'auto'}}>
                            { this.props.access && <SearchBar allCommunities={allCommunities} setCommunity={this.props.setCommunity} /> }
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} direction='row' justify='space-around'>
                        <Grid item xs={11} sm={10} md={9} lg={8} style={{marginBottom: '19px'}}>
                            <ReportsList access={this.props.access} />
                        </Grid>
                    </Grid>
                </Grid> 
            </NavBar>
        )
    }
}


function mapStateToProps(state) {
    const { access } = state.authentication;
    return {
        access
    };
}


const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage }; 