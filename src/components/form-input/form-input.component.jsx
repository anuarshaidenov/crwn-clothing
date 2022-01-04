import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-input">
    <input
      onChange={handleChange}
      {...otherProps}
      className="form-input__input"
    />
    {label ? (
      <label
        className={`form-input__label ${
          otherProps.value ? 'form-input__label--shrink' : ''
        }`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
