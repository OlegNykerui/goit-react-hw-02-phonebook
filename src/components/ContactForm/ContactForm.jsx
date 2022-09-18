import { Component } from 'react';
// import PropTypes from 'prop-types';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  inputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  resetForm = () => {
    this.setState({
      name: ' ',
      number: ' ',
    });
  };
}
