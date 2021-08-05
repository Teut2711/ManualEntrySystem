import PatientDetails, { TestDetails } from "./PatientProfileForm";
import { Grid } from 'semantic-ui-react';
import { useState, createContext } from 'react';
import { Tab } from 'semantic-ui-react'
import { Button, Form, Message } from "semantic-ui-react";
import { useForm, FormProvider } from "react-hook-form";
import { AddTestButton } from "./PatientProfileForm";

export const TestContext = createContext();

const Main = () => {
  const [testList, setTestList] = useState({});
  const methods = useForm();
  const [counter, setCounter] = useState(0);
  const handleInputChange = (e, { name, value }) => {
    methods.setValue(name, value);
  };





  const allTests = Object.keys(testList).map(key => {

    return {
      menuItem: testList[key].text,
      render: () => <Tab.Pane >
        <Message
          attached
          header="Test Details"
          content="Fill out the test details."
        />
        <TestDetails />
        <AddTestButton />
        <Button color="violet">Submit</Button>
      </Tab.Pane>
    }
  })

  const details = {
    menuItem: 'Patient Profile',
    render: () => <Tab.Pane>
      <Message
        attached
        header="Patient Details"
        content="Fill out the patient details."
      />
      <PatientDetails />
      <AddTestButton />
      <Button color="violet">Submit</Button>
    </Tab.Pane>
  }
  const menuItems = [details, ...allTests]

  return (
    <Grid.Column width={16}>
      <FormProvider {...{ ...methods, handleInputChange }}  >
        <TestContext.Provider value={{ counter, setCounter, setTestList }}>

          <Form className="attached fluid segment">

            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={menuItems} />

          </Form>
        </TestContext.Provider>
      </FormProvider>
    </Grid.Column>)
}

export default Main;




