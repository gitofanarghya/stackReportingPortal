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
import Analytics_Monthly_414_2018_Dec from './reports/Analytics Monthly-414-2018-Dec.pdf'
import Analytics_Monthly_414_2018_Nov from './reports/Analytics Monthly-414-2018-Nov.pdf'
import Analytics_Monthly_414_2019_Jan from './reports/Analytics Monthly-414-2019-Jan.pdf'
import Analytics_Monthly_610_2018_Dec from './reports/Analytics Monthly-610-2018-Dec.pdf'
import Analytics_Monthly_610_2018_Nov from './reports/Analytics Monthly-610-2018-Nov.pdf'
import Analytics_Monthly_610_2019_Jan from './reports/Analytics Monthly-610-2019-Jan.pdf'
import Stairwell_Weekly_2018_Dec_10 from './reports/Stairwell Weekly 2018-Dec-10.pdf'
import Stairwell_Weekly_2018_Dec_31 from './reports/Stairwell Weekly 2018-Dec-31.pdf'
import Stairwell_Weekly_2018_Dec_24 from './reports/Stairwell Weekly 2018-Dec-24.pdf'
import Stairwell_Weekly_2018_Dec_17 from './reports/Stairwell Weekly 2018-Dec-17.pdf'
import Stairwell_Weekly_2019_Jan_07 from './reports/Stairwell Weekly 2019-Jan-07.pdf'
import Unit_Motion_Weekly_2018_Dec_10 from './reports/Unit Motion Weekly 2018-Dec-10.pdf'
import Unit_Motion_Weekly_2018_Dec_17 from './reports/Unit Motion Weekly 2018-Dec-17.pdf'
import Unit_Motion_Weekly_2018_Dec_24 from './reports/Unit Motion Weekly 2018-Dec-24.pdf'
import Unit_Motion_Weekly_2018_Dec_31 from './reports/Unit Motion Weekly 2018-Dec-31.pdf'
import Unit_Motion_Weekly_2019_Jan_07 from './reports/Unit Motion Weekly 2019-Jan-07.pdf'


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
    overflow: 'auto',
  },
  table: {
    padding: '10px',
    borderCollapse: 'unset'
  },
  link: {
      color: 'unset'
  },
  row: {
      paddingLeft: '20px'
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
      const {classes, access} = this.props

    return (
        !access ? <center>No reports to show</center> :  
        <Paper className={classes.root}>
        <Typography variant="headline" component="h3" style={{paddingLeft: '10px'}}>
            REPORTS
          </Typography>
          <Table className={classes.table}>
          
              <TableHead>
              <TableRow>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                  < TableCell padding="none"><Typography variant="h5">Name</Typography></ TableCell>
                  < CustomTableCell padding="none"><Typography variant="h5"></Typography></ CustomTableCell>
                  < CustomTableCell padding="none"><Typography variant="h5">Download </Typography></ CustomTableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                            Stairwell Weekly 2019-Jan-07
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Stairwell_Weekly_2019_Jan_07} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                            Stairwell Weekly 2018-Dec-31
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Stairwell_Weekly_2018_Dec_31} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                  <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Stairwell Weekly 2018-Dec-24
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Stairwell_Weekly_2018_Dec_24} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Stairwell Weekly 2018-Dec-17
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Stairwell_Weekly_2018_Dec_17} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Stairwell Weekly 2018-Dec-10
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Stairwell_Weekly_2018_Dec_10} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Unit Motion Weekly 2019-Jan-07 
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Unit_Motion_Weekly_2019_Jan_07} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Unit Motion Weekly 2018-Dec-31 
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Unit_Motion_Weekly_2018_Dec_31} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Unit Motion Weekly 2018-Dec-24
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Unit_Motion_Weekly_2018_Dec_24} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                            Unit Motion Weekly 2018-Dec-17
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Unit_Motion_Weekly_2018_Dec_17} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Unit Motion Weekly 2018-Dec-10
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Unit_Motion_Weekly_2018_Dec_10} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Analytics Monthly-610-2019-Jan
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Analytics_Monthly_610_2019_Jan} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Analytics Monthly-610-2018-Dec
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Analytics_Monthly_610_2018_Dec} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Analytics Monthly-610-2018-Nov
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Analytics_Monthly_610_2018_Nov} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Analytics Monthly-414-2019-Jan
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Analytics_Monthly_414_2019_Jan} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Analytics Monthly-414-2018-Dec
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Analytics_Monthly_414_2018_Dec} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  <TableRow hover className={classes.row}>
                    <TableCell padding='none' style={{width: '90px'}}></TableCell>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                          Analytics Monthly-414-2018-Nov
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"></ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={Analytics_Monthly_414_2018_Nov} download=""><FileDownloadIcon/></a></ CustomTableCell>
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



/*

                  <TableRow hover className={classes.row}>
                      < TableCell component="th" scope="row" padding="none">
                          <Typography variant="body1">
                              Unit Activity Weekly : Oct 19 - Nov 25
                          </Typography>    
                      </ TableCell>
                      < CustomTableCell padding="none"> Nov 26 2018 </ CustomTableCell>
                      < CustomTableCell padding="none"><a className={classes.link} href={unit_activity_weekly2} download=""><FileDownloadIcon/></a></ CustomTableCell>
                  </TableRow>
                  */