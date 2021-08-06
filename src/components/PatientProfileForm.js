import React, { useState, useContext, useEffect } from "react";
import { Icon, Button, Form, Message, Modal, Input, Select } from "semantic-ui-react";
import { Context } from "../App";
import { useFormContext } from "react-hook-form";
import { TestContext } from "./Main";


const PatientDetails = () => {
  const { register, handleInputChange, getValues, formStore, setFormStore, setValue } = useFormContext();
  const { appState } = useContext(Context);


  useEffect(() => {
    for (const key in appState.patient.details) {
      const name = "patient." + appState.patient.details[key].name;

      register(name, { required: true });
      setFormStore(state => {
        let newState = { ...state };

        if (!(name in newState)) {
          newState[name] = "";
          setValue(name, "")
        }
        else
          setValue(name, newState[name])
        return newState;
      })
    }
  }, [appState.patient.details, register, setFormStore, setValue]);


  return <>
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
export default PatientDetails;




export const TestDetails = () => {
  const { handleInputChange } = useFormContext();
  const { appState } = useContext(Context);
  const { counter } = useContext(TestContext)

  return <>
    {
      Object.values(appState.patient.tests).map((props, index) => {
        const fieldProps = {
          ...props,
          name: `patient.tests.${counter}.${props.name}`,
        };

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
      })
    }

  </>
}

export const AddTestButton = () => {

  const { unregister, getValues, register, setValue, formStore, setFormStore } = useFormContext();
  const { counter, setCounter, setTestList } = useContext(TestContext)
  const [open, setOpen] = useState(false);
  const { appState } = useContext(Context);


  const handleTestAdditionAccept = () => {
    setTestList(state => {
      let newItem = {
        [counter]: {
          text: getValues(`patient.tests.${counter}.name`, "value"),
        }

      }
      const newState = { ...state, ...newItem }

      setCounter(state => state + 1);
      setOpen(false);

      return newState;

    })

  }


  const handleTestAddition = () => {


    for (const key in appState.patient.tests) {
      const name = `patient.tests.${counter}.${appState.patient.tests[key].name}`
      register(name, { required: true });

      setFormStore(state => {
        let newState = { ...state };

        if (!(name in newState)) {
          newState[name] = "";
          setValue(name, "")
        }
        else
          setValue(name, newState[name])
        return newState;
      })
    }
  }

  const handleTestAdditionCancel = () => {
    unregister(`patient.tests.${counter}`);
    setOpen(false);
  }

  return <Modal onOpen={() => setOpen(true)}
    open={open}
    trigger={
      <Button positive onClick={handleTestAddition}>
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
      <TestDetails />
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
