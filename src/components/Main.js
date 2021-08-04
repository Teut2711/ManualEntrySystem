import PatientDetails, { TestDetails } from "./PatientProfileForm";
import { Grid } from 'semantic-ui-react';
import { useState, useContext } from 'react';
import { Tab } from 'semantic-ui-react'
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
import { useForm, FormProvider } from "react-hook-form";

const Main = () => {
  const [testList, setTestList] = useState([]);
  const methods = useForm();
  const { appState } = useContext(Context);

  const handleTestAddition = () => {
    for (const v in Object.values(appState.patient.tests)) {
      methods.register(`patient.tests.${counter}.${v.name}`, { required: true });
    }


  }
  const [counter, setCounter] = useState(0);
  const menuItems = [...(testList.map(({ text }, index) => {

    return {
      menuItem: text, render: () => <Tab.Pane>
        <TestDetails />

        <Button positive onClick={handleTestAddition}>
          Add Test
          <span>
            <Icon name="plus circle" />
          </span>
        </Button>

        <Button color="violet">Submit</Button>

      </Tab.Pane>
    }
  })), {
    menuItem: 'Patient Profile', render: () => <Tab.Pane>
      <PatientDetails
        testList={testList}
        setTestList={setTestList}
        counter={counter}
        setCounter={setCounter} />

      <Button positive >
        {/* onClick={handleTestFieldsRegistration} */}
        Add Test
        <span>
          <Icon name="plus circle" />
        </span>
      </Button>

      <Button color="violet">Submit</Button>

    </Tab.Pane>
  }]
  return (<Grid.Column width={16}>
    <FormProvider {...methods} >
      <Form className="attached fluid segment">
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={menuItems} />
      </Form>
    </FormProvider>
  </Grid.Column>)
}
export default Main;




