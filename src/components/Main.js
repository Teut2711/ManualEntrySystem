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
  const methods = useForm({ shouldUnregister: false });
  const [counter, setCounter] = useState(0);

  const handleInputChange = (e, { name, value }) => {
    methods.setValue(name, value);
  };

  const handleTestDeletion = (event, { testID }) => {
    console.log("Deletion")
    setTestList(state => state.filter(ele => ele.id !== testID))
    
    methods.unregister(`patient.tests.${ testID }`)
  }

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


  const allTests = Object.keys(testList).map(testID => {
    
    return {
      menuItem: testList[testID].text,
      render: () => <Tab.Pane >
        <Message
          attached
          header="Test Details"
          content="Fill out the test details."
        />
        <TestDetails testID={testID} />
        <AddTestButton />
        <Button color="red" onClick={handleTestDeletion}>Remove test</Button>
        <Button color="violet">Submit</Button>
      </Tab.Pane>
    }
  })


  const menuItems = [details, ...allTests]

  return (
    <Grid.Column width={16}>
      <FormProvider {...{ ...methods, handleInputChange }}  >
        <TestContext.Provider value={{ counter, setCounter, setTestList, handleTestDeletion }} >
          <Form className="attached fluid segment" method="post" action={"http://localhost:8000"} onSubmit={ e=>e.preventDefault()}>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={menuItems} />
          </Form>
        </TestContext.Provider>
      </FormProvider>
    </Grid.Column>)
}

export default Main;




