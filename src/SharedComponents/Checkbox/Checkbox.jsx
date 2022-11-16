import React from "react";
import s from './Checkbox.module.css'


const Checkbox = ({ label, onChange, checked, id }) => {
  return (
    <div className={s.wrapper}>
      <input 
        name="cssCheckbox" 
        checked={checked} 
        id={`checkbox-${id}`}
        type="checkbox" 
        onChange={onChange} 
        class={s.cssCheckbox}
      />
		  <label className={s.label} for={`checkbox-${id}`}>
        <span className={checked ? s.labelText + ' ' + s.labelTextChecked : s.labelText}>{label}</span>
        </label>
    </div>
  )
}

export default Checkbox