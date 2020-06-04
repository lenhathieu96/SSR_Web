import React from "react";
import PropTypes from "prop-types";
import { FormControl, TextField } from "@material-ui/core";

import NumberFormat from "react-number-format";

InputNumberField.propTypes = {
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

function InputNumberField(props) {
  const { field, label, placeholder, type, disabled } = props;

  return (
    <FormControl style={{marginBottom:20}}>
      <TextField
        {...field}

        disabled={disabled}
        label={label}
        placeholder={placeholder}
        type={type}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </FormControl>
  );
}

export default InputNumberField;

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
