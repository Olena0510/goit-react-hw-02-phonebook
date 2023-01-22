import PropTypes from 'prop-types';

export const ContactsBookItem = ({ name,number }) => {
    <div>
        <p>{name}:{number}</p>
    </div>
}

ContactsBookItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    // id: PropTypes.string.isRequired,
}