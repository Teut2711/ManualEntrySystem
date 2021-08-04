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
import { useForm } from "react-hook-form";

export default function PatientProfileForm({ testList, setTestList }) {
  const { appState } = useContext(Context);

  const { register, setValue, unregister, getValues } = useForm();
  const [counter, setCounter] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    for (const v in Object.values(appState.patient.details)) {
      register(`patient.${v.name}`, { required: true });
    }
  });

  const handleInputChange = (e, { name, value }) => {
    setValue(name, value);
  };

  const getControl = (type) => {
    switch (type) {
      case "select":
        return Select;
      default:
        return Input;
    }
  };

  const patientDetails = (
    <>
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
  );

  const testForm = (
    <Modal.Content>
      {Object.values(appState.patient.tests).map((props, index) => {
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
      })}
    </Modal.Content>
  );

  const handleTestFieldsRegistration = () => {
    for (const v in Object.values(appState.patient.tests)) {
      register(`patient.tests.${counter}.${v.name}`, { required: true });
    }
  }
  const snakeCase = string => {
    return string.replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
  };


  return (
    <Form className="attached fluid segment">
      <Message
        attached
        header="Patient Details"
        content="Fill out the patient details."
      />
      {patientDetails}
      <Divider />
      <Modal
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button positive onClick={handleTestFieldsRegistration}>
            Add Test
            <span>
              <Icon name="plus circle" />
            </span>
          </Button>
        }
      >
        <Modal.Header>
          <Message
            attached
            header="Add a test"
            content="Fill out the test details."
          />
        </Modal.Header>
        {testForm}

        <Modal.Actions>
          <Button
            color="green"
            onClick={() => {
              setCounter((state) => state + 1);
              setOpen(false);

              setTestList(state => {
                const newState = {
                  text: getValues(`patient.tests.${counter}.name`, "value"),
                  id: getValues(`patient.tests.${counter}.name`, "id")
                }

                newState.name = snakeCase(newState.text.toLowerCase())
                return [...state, newState]
              })

            }}
          >
            OK
          </Button>

          <Button
            color="black"
            onClick={() => {
              unregister(`patient.tests.${counter}`);
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>

      <Button color="violet">Submit</Button>
    </Form>
  );
}




const TestForm = () => {
  const { appState } = useContext(Context);

  const { register, setValue, unregister, getValues } = useForm();
 
  return <>
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
  </>

}
