import PropTypes from 'prop-types';
import { ContactsBookItem } from 'components/ContactsBookItem/ContactsBookItem';

export const ContactsBookList = ({contacts, onDelete }) => {
  return (
    <ul>
          {contacts.map(({ id, name, number }) => (
                  <li key={id}>
                  <ContactsBookItem name={name} number={number} onDelete = {onDelete} />
              </li>
          )
        )}
    </ul>
  );
}

ContactsBookList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    
    deleteContact: PropTypes.func.isRequired
}

