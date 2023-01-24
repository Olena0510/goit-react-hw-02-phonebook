import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <label>Find contacts by name
                <input type = "text" value={value} onChange = {onChange}></input>
          </label>

        </div>
    )
}

Filter.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
}
