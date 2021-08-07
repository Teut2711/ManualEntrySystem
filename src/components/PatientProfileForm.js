import React, { useState, useContext } from "react";
import { Icon, Button, Form, Message, Modal, Input, Select } from "semantic-ui-react";
import { Context } from "../App";
import { useFormContext } from "react-hook-form";
import { TestContext } from "./Main";


const PatientDetails = () => {
  const { getValues, register, handleInputChange } = useFormContext();
  const { appState } = useContext(Context);
  return <>
    {
      Object.values(appState.patient.detailsSpec).map((fieldDescription, index) => {

        let fieldProps = { ...fieldDescription.props, name: `patient.${fieldDescription.props.name}` };
        fieldProps.id = fieldProps.name;
        fieldProps.defaultValue = getValues(fieldProps.name) || fieldDescription.props.defaultValue || "";

        return (
          <Form.Group key={index.toString()} widths="equal">
            <Form.Field
              fluid
              control={getControl(fieldDescription.props.type)}
              {...register(fieldProps.name, { ...fieldDescription.validation })}
              {...fieldProps}
              onChange={handleInputChange}

            />
          </Form.Group>
        );
      })}

  </>


}
export default PatientDetails;




export const TestDetails = ({ isModal = false, testID }) => {
  const { getValues, handleInputChange, register } = useFormContext();
  const { appState } = useContext(Context);

  return <>
    {
      Object.values(appState.patient.testSpec).map((fieldDescription, index) => {
        let fieldProps = { ...fieldDescription, name: `patient.tests.${testID}.${fieldDescription.name}` };
        fieldProps.id = fieldProps.name;
        if (!isModal)
          fieldProps.defaultValue = getValues(fieldProps.name) || fieldDescription.props.defaultValue || "";

        return (
          <Form.Group key={index} widths="equal">
            <Form.Field
              fluid
              control={getControl(fieldDescription.props.type)}
              {...fieldProps}
              {...register(fieldProps.name, { ...fieldDescription.validation })}
              onChange={handleInputChange}
            />
          </Form.Group>
        );
      })
    }

  </>
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
      <TestDetails isModal={true} testID={testID} />
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
