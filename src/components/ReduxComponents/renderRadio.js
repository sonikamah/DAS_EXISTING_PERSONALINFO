
import React from 'react';

// Needs to be refactored, in case needed we can create similar template instead of making is unmaintainable and readable
const renderField = ({label, data}) => {
  var fields = data.map((item, index) => {

    return <div><input type="radio" id={item.id} value={item.value} name={item.name} /> <label htmlFor={item.id} >{item.label}</label></div>
  })
  return (
    <div>
      <label className="custom-label">{label}</label>
      <div className="toggleBtn gm-display_inlineBlock">
        {fields}
      </div>
    </div>)
};
export default renderField;