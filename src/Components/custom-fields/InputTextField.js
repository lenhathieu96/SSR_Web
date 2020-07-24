import React from "react";
import PropTypes from "prop-types";
import { FormControl,TextField } from "@material-ui/core";

InputTextField.propTypes = {
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  type:PropTypes.string
};

function InputTextField(props) {
  const { 
      field,
      label, placeholder,type,disabled
    } = props;

  return (
    <FormControl  style={{marginBottom:20}}>
      <TextField
        {...field}

        disabled={disabled}
        label={label}
        placeholder={placeholder}
        type={type}
      />
    </FormControl>
  );
}

export default InputTextField;