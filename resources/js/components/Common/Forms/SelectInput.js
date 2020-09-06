import React from "react";
import PropTypes from "prop-types";

const SelectInput = ({
    name,
    label,
    defaultOption,
    value,
    onChange,
    error,
    options
}) => {
    return (
        <div className="mt-0">
            <label className="h6" htmlFor={name}>{label}</label>
            <div className="field">
                <select
                    name={name}
                    className="form-control bg-white"
                    value={value}
                    onChange={onChange}
                >
                    <option value="">{defaultOption}</option>
                    {options.map(option => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        );
                    })}
                </select>
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </div>
    );
};

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    defaultOption: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string
};

export default SelectInput;
