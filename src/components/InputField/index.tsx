import React from "react";
import { classNames } from './../../utils/classNames';

interface Props {
  label: string,
  type: string,
  readOnly?: boolean,
  value: string,
  required?: boolean
  name: string
  placeholder?: string
  onChange?: () => void
}

export default function InputField({label, type, onChange, required, value, name, readOnly, placeholder}: Props) {
  return (
    <div className={classNames("form-group form-group-default", required && 'required')}>
      <label>{label}</label>
      <input
        type={type}
        className="form-control text-muted"
        placeholder={placeholder}
        name={name}
        value={value}
        readOnly={readOnly}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
