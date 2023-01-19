import PropTypes, { number } from 'prop-types';
import { ContactsBookItem } from 'components/ContactsBookItem/ContactsBookItem';

export const ContactsBookList = ({contacts }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <ContactsBookItem
                        name={name}
                        number={number}
                        id={id} />
                </li>
           ))}
        </ul>
        
    )
}

ContactsBookList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
    })
)
}