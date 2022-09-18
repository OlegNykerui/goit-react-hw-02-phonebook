import { Component } from 'react';
import PropTypes from 'prop-types';
// import css from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <>
        <p
          style={{
            textAlign: 'center',
          }}
        >
          Знайди контакти по імені
        </p>
        <input
          style={{
            display: 'flex',
            alignItems: 'center',
            marginRight: 'auto',
            marginLeft: 'auto',
            backgroundColor: '#e3dad0',
            color: 'black',
            border: 'none',
            outline: 'none',
            borderRadius: '5%',
            width: '250px',
            height: '20px',
            padding: '15px',
          }}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.filterChange}
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
