import PropTypes from 'prop-types';
import { ContactsBookItem } from 'components/ContactsBookItem/ContactsBookItem';

export const ContactsBookList = ({contacts }) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) => (
                <li key={id}>
                    <ContactsBookItem
                        name={name}
                        number={number}
                         id={id}
                         />
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