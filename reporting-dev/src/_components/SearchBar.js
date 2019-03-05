import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';

const styles = theme => ({
  root: {
    flexGrow: 1,
    borderRadius: '5px',
    padding: '5px',
    margin: 'auto'
  }
});

const customStyles = {
  control: (base, state) => ({
    ...base,
    border: "none",
    backgroundColor: "#ffffff",
    minHeight: 50
  }),
  singleValue: (base, state) => ({
    ...base, 
    color: "black",
    border: "none",
  })
}

class IntegrationReactSelect extends Component {

  state = {
    name: 'PARC Westerleigh'
  }

  handleChange = value => {
    if(value) {
      value.value === '1' ? this.props.setCommunity(true) : this.props.setCommunity(false)
    }
    this.setState({
      name: value.label
    })
  };
  
  render() {
    console.log(this.state)
    const { classes } = this.props;

    const allCommunities = [{
        id: '1',
        name: 'PARC Westerleigh'
    },
    {
      id: '2',
      name: 'PARC Oceana'
    }]

    const suggestions = allCommunities ? allCommunities.map(suggestion => ({
      value: suggestion.id,
      label: suggestion.name,
    })) : null

    return (
      <div className={classes.root}>

        <NoSsr>
          <Select
            className="searchBar"
            placeholder={this.state.name}
            options={suggestions}
            styles={customStyles}
            onChange={this.handleChange}
          />
        </NoSsr>  
      </div>
    );
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const SearchBar = (withStyles(styles)(IntegrationReactSelect));