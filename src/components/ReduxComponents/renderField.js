import React from 'react';

// Needs to be refactored, in case needed we can create similar template instead of making is unmaintainable and readable
const renderField = ({ input, label, className, isReadOnly, customInputClassName, subLevelContaner, type, meta: {touched, error}}) => {
  return (<div className={(isReadOnly ? "readOnly " : "")+className}>
    {label && <label className={subLevelContaner ? "custom-sub-label" : "custom-label"}>{label}</label>}
    <input {...input} className={customInputClassName ? "custom-input " + customInputClassName : "custom-input"} placeholder={label} type={type} />
    {touched && error && <div className="error-message">{error} </div>}
  </div>)
};

export default renderField;