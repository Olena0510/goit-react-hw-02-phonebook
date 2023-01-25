import PropTypes from 'prop-types';

export const ContactsBookItem = ({ name, number, id, deleteContact }) => (
   
    <div>
        <p>{name}:{number}</p>
        <button type="button" onClick = {() => deleteContact(id)}>Delete</button>
    </div>
)

ContactsBookItem.propTypes = {
  name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
  
};