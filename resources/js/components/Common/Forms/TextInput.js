import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
    id,
    name,
    value,
    label,
    onChange,
    type,
    autoComplete
}) => {
    return (
        <div className="form-group h6">
            <label htmlFor={id}>{label}</label>
            <div className="field">
                <input
                    required
                    type={type}
                    id={id}
                    onChange={onChange}
                    name={name}
                    className="form-control bg-white"
                    value={value}
                    autoComplete={autoComplete}
                />
            </div>
        </div>
    );
};

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default TextInput;
