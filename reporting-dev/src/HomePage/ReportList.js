import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
import FileDownloadIcon from '@material-ui/icons/FileDownload'
import InsertChartIcon from '@material-ui/icons/InsertChart'
import DateRangeIcon from '@material-ui/icons/DateRange'
import event_detail_monthly from './reports/event_detail_monthly.dajpqmxj78mpvo7b8beejpgk8jbvp.201810.pdf'
import event_detail_monthly2 from './reports/event_detail_monthly.dajpqmxj78mpvo7b8beejpgk8jbvp.201811.pdf'
import event_detail_weekly from './reports/event_detail_weekly.dajpqmxj78mpvo7b8beejpgk8jbvp.2018w44.pdf'
import event_detail_weekly2 from './reports/event_detail_weekly.dajpqmxj78mpvo7b8beejpgk8jbvp.2018w47.pdf'
import unit_activity_monthly from './reports/unit_activity_monthly.dajpqmxj78mpvo7b8beejpgk8jbvp.201810.pdf'
import unit_activity_monthly2 from './reports/unit_activity_monthly.dajpqmxj78mpvo7b8beejpgk8jbvp.201811.pdf'
import unit_activity_weekly from './reports/unit_activity_weekly.dajpqmxj78mpvo7b8beejpgk8jbvp.2018w44.pdf'
import unit_activity_weekly2 from './reports/unit_activity_weekly.dajpqmxj78mpvo7b8beejpgk8jbvp.2018w47.pdf'
import unit_activity_weekly3 from './reports/unit_activity_weekly.dajpqmxj78mpvo7b8beejpgk8jbvp.2018w48.pdf'


const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
      textAlign: 'center',

    },
    body: {
        textAlign: 'center'
    },
  }))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    height: '530px',
    overflow: 'auto',
  },
  table: {
    padding: '10px',
    borderCollapse: 'unset'
  },
  link: {
      color: 'unset'
  }
});

class Reports extends React.Component {
  
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleClick(id) {
    this.props.setCommunity(id)
  }

  render() {
      const {classes} = this.props

    return (
        <Paper className={classes.root}>
        <Typography variant="headline" component="h3" style={{padding: '10px'}}>
            REPORTS
          </Typography>
          <Table className={classes.table}>
          
              <TableHead>
              <TableRow>
                  < CustomTableCell padding="none"><Typography variant="subheading"><InsertChartIcon variant='large'/>Report</Typography></ CustomTableCell>
                  < CustomTableCell padding="none"><Typography variant="subheading"><DateRangeIcon />Created on</Typography></ CustomTableCell>
                  < CustomTableCell padding="none"><Typography variant="subheading">Download </Typography></ CustomTableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Event Report Weekly : Nov 25 - Dec 02
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Dec 03 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={unit_activity_weekly3} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Unit Activity Monthly : Nov 01 - Nov 30
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Dec 01 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={unit_activity_monthly2} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Event Report Monthly : Nov 01 - Nov 30
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Dec 01 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={event_detail_monthly2} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Event Report Weekly : Nov 19 - Nov 25
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Nov 26 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={event_detail_weekly2} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Event Report Weekly : Oct 19 - Nov 25
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Nov 26 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={unit_activity_weekly2} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Event Report Weekly : Oct 29 - Nov 04
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Nov 05 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={event_detail_weekly} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Event Report Weekly : Oct 29 - Nov 04
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Nov 05 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={unit_activity_weekly} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Event Report Monthly : Oct 01 - Nov 01
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Nov 01 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={event_detail_monthly} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                      < CustomTableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Unit Activity Monthly : Oct 01 - Nov 01
                          </Typography>    
                      </ CustomTableCell>
                      < CustomTableCell padding="none"> Nov 01 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={unit_activity_monthly} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
              </TableBody>
          </Table>
          </Paper>
    );
  }
}

Reports.propTypes = {
  classes: PropTypes.object.isRequired,
};


export const ReportsList = withStyles(styles)(Reports)