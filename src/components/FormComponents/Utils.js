import React from "react";
import { Form, Input, Select } from "semantic-ui-react";
import { useFormContext } from "react-hook-form";
import _ from "lodash";



export const GetFields = (fieldSpec, modifyName) => {

  const handleInputChange = (e, { name, value }) => {
    setValue(name, value);
  };

  const { setValue, getValues, register, formState: { errors } } = useFormContext();

  const getFieldProps = (props) => {
    let fieldProps = { ...props, name: modifyName(props.name) };
    fieldProps.id = fieldProps.name;
    fieldProps.defaultValue = getValues(fieldProps.name) || props.defaultValue || "";
    return fieldProps;
  }


  return Object.values(fieldSpec).map(({ props, validation }, index) => {
    let fieldProps = getFieldProps(props);
    const errorMessage = _.get(errors, fieldProps.name)?.message;
    return (
      <Form.Group key={index.toString()} widths="equal">
        <Form.Field
          fluid
          control={getControl(fieldProps.type)}
          {...register(fieldProps.name, { ...validation })}
          {...fieldProps}
          onChange={handleInputChange}
        />
        {errorMessage &&
          <p style={{ color: "red" }}>{errorMessage}</p>
        }
      </Form.Group>
    );
  })
}




export const getControl = (type) => {
  switch (type) {
    case "select":
      return Select;
    default:
      return Input;
  }
};
