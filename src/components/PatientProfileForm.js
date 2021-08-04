import React, { useContext, useEffect } from "react";
import {
  Icon,
  Button,
  Form,
  Message,
  Divider,
  Modal,
  Input,
  Select,
} from "semantic-ui-react";
import { Context } from "../App";
import { useFormContext } from "react-hook-form";

function getControl(type) {
  switch (type) {
    case "select":
      return Select;
    default:
      return Input;
  }
};






const PatientDetails = () => {
  const { register, setValue } = useFormContext();
  const { appState } = useContext(Context);

  const handleInputChange = (e, { name, value }) => {
    setValue(name, value);
  };

  const snakeCase = string => {
    return string.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
  };


  return <>
    <Message
      attached
      header="Patient Details"
      content="Fill out the patient details."
    />

    {Object.values(appState.patient.details).map((props, index) => {
      let fieldProps = { ...props, name: `patient.${props.name}` };
      fieldProps.id = fieldProps.name;
      return (
        <Form.Group key={index.toString()} widths="equal">
          <Form.Field
            fluid
            control={getControl(props.type)}
            {...fieldProps}
            onChange={handleInputChange}
          />
        </Form.Group>
      );
    })}
  </>


}


export const TestDetails = ({ testList, setTestList, counter, setCounter }) => {
  const { register, unregister, setValue, getValues } = useFormContext();
  const { appState } = useContext(Context);

  const handleInputChange = (e, { name, value }) => {
    setValue(name, value);
  };

  const snakeCase = string => {
    return string.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
  };

  const handleTestAddition = () => {
    setCounter((state) => state + 1);

    setTestList(state => {
      const newState = {
        text: getValues(`patient.tests.${counter}.name`, "value"),
        id: getValues(`patient.tests.${counter}.name`, "id")
      }
      newState.name = snakeCase(newState.text.toLowerCase())
      return [...state, newState]
    })
  }


  const handleTestFieldsUnregistration = () => {
    unregister(`patient.tests.${counter}`);
  }


  useEffect(() => {
    for (const v in Object.values(appState.patient.details)) {
      register(`patient.${v.name}`, { required: true });
    }
  });


  return <>
    <Message
      attached
      header="Add a test"
      content="Fill out the test details."
    />

    {
      Object.values(appState.patient.tests).map((props, index) => {
        const fieldProps = {
          ...props,
          name: `patient.tests.${counter}.${props.name}`,
        };
        fieldProps.id = fieldProps.name;

        return (
          <Form.Group key={index.toString()} widths="equal">
            <Form.Input
              fluid
              control={getControl(props.type)}
              {...fieldProps}
              onChange={handleInputChange}
            />
          </Form.Group>
        );
      })
    }
    <Button
      color="green"
      onClick={handleTestAddition}>
      OK
    </Button>

    <Button
      color="black"
      onClick={handleTestFieldsUnregistration}
    >
      Cancel
    </Button>

  </>
}
export default PatientDetails;