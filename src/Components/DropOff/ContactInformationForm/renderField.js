import React, { Component } from "react";

const RenderField = ({
  input,
  placeholder,
  type,
  className,
  handleChange,
  value,
  noValidate,
  meta: { touched, error, warning }
}) => (
  <input
    {...input}
    placeholder={placeholder}
    type={type}
    value={value}
    onChange={handleChange}
    noValidate
    className={className}
  />
);
export default RenderField;
