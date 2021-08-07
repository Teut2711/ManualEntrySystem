import React, { useState, useContext } from "react";
import { Icon, Button, Form, Message, Modal, Input, Select } from "semantic-ui-react";
import { Context } from "../App";
import { useFormContext } from "react-hook-form";
import { TestContext } from "./Main";


const useGetFields = (fieldSpec, modifyName) => {
  const { getValues, register, handleInputChange } = useFormContext();

  const getFieldProps = (props) => {
    let fieldProps = { ...props, name: modifyName(props.name) };
    fieldProps.id = fieldProps.name;
    fieldProps.defaultValue = getValues(fieldProps.name) || props.defaultValue || "";

    return fieldProps;
  }



  return Object.values(fieldSpec).map(({ props, validation }, index) => {
    let fieldProps = getFieldProps(props);

    return (
      <Form.Group key={index.toString()} widths="equal">
        <Form.Field
          fluid
          control={getControl(fieldProps.type)}
          {...register(fieldProps.name, { ...validation })}
          {...fieldProps}
          onChange={handleInputChange}
        />
      </Form.Group>
    );
  })
}




const PatientDetails = () => {
  const { appState } = useContext(Context);
  return useGetFields(
    appState.patient.detailsSpec,
    name => `patient.${name}`)

}
export default PatientDetails;




export const TestDetails = ({ testID }) => {
  const { appState } = useContext(Context);
  return useGetFields(appState.patient.testSpec, name => `patient.tests.${testID}.${name}`)


}

export const AddTestButton = () => {

  const { unregister, getValues } = useFormContext();
  const { counter, setCounter, setTestList } = useContext(TestContext)
  const [open, setOpen] = useState(false);

  const testID = `test${counter}`;


  const handleTestAdditionAccept = () => {

    setTestList(state => {

      const newState = {
        ...state, [testID]: { text: getValues(`patient.tests.${testID}.name`) }
      }


      setCounter(state => state + 1);
      setOpen(false);
      console.log(getValues("patient.tests"));
      return newState;

    })

  }


  const handleTestAdditionCancel = () => {
    unregister(`patient.tests.${testID}`);
    setOpen(false);
  }


  return <Modal onOpen={() => setOpen(true)}
    open={open}
    trigger={
      <Button positive >
        Add Test
        <span>
          <Icon name="plus circle" />
        </span>
      </Button>
    }>
    <Modal.Header>
      <Message
        attached
        header="Add a test"
        content="Fill out the test details."
      />
    </Modal.Header>
    <Modal.Content>
      <TestDetails testID={testID} />
    </Modal.Content>
    <Modal.Actions>
      <Button
        color="green"
        onClick={handleTestAdditionAccept}
      >
        OK
      </Button>
      <Button
        color="black"
        onClick={handleTestAdditionCancel}
      >
        Cancel
      </Button>
    </Modal.Actions>
  </Modal>


}


const getControl = (type) => {
  switch (type) {
    case "select":
      return Select;
    default:
      return Input;
  }
};
