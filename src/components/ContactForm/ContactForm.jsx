import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  inputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '200px',
          height: '250px',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '10px',
          border: '2px solid #9c6767',
          borderRadius: '10%',
          backgroundColor: '#fffdd0',
        }}
        onSubmit={this.formSubmit}
      >
        <label className={css.title}>
          <p className={css.title}>Ім'я</p>
          <input
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={this.state.name}
            onChange={this.inputChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p className={css.title}>Номер телефону</p>
          <input
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.inputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          style={{
            height: '30px',
            width: '100%',
            border: 'none',
            bordeRadius: '10px',
            color: ' #e6d9d9',
            backgroundColor: ' #9c6767',
            marginTop: '20px',
          }}
        >
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
