import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    return (
      <ul
        style={{
          textAlign: ' center',
          listStyle: ' none',
        }}
      >
        {this.props.contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name} : {number}
              </p>
              <button
                onClick={() => {
                  this.props.deleteContact(id);
                }}
              >
                 Видалити контакт
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  filteredName: PropTypes.string.isRequired,
};

export default ContactList;
