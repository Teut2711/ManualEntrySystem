import PatientDetails, { TestDetails } from "./PatientProfileForm";
import { Grid } from 'semantic-ui-react';
import { useState, createContext, useContext } from 'react';
import { Tab } from 'semantic-ui-react'
import { Button, Form, Message } from "semantic-ui-react";
import { useForm, FormProvider } from "react-hook-form";
import { AddTestButton } from "./PatientProfileForm";
import { ResetButton } from "formik-semantic-ui-react";

export const TestContext = createContext();

const Main = () => {
  const [testList, setTestList] = useState({});
  const methods = useForm();
  const [counter, setCounter] = useState(0);
  const [formStore, setFormStore] = useState({})


  const handleInputChange = (e, { name, value }) => {
    methods.setValue(name, value);
    setFormStore(state => {
      if (!(name in state))
        throw new Error("Some weird error. Key not initialised but updating");
      return { ...state, [name]: value }
    }
    )
  };





  const allTests = Object.keys(testList).map(key => {
    return {
      menuItem: testList[key].text,
      render: () => {
        return <Tab.Pane >
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


  const handleTabChange = () => {
    for (const [key, val] in Object.entries(formStore)) {

      methods.setValue(key, val)
    }
    console.log(methods.getValues())
  }

  const menuItems = [details, ...allTests]

  return (
    <Grid.Column width={16}>
      <FormProvider {...{ ...methods, handleInputChange, formStore, setFormStore }}  >
        <TestContext.Provider value={{ counter, setCounter, setTestList }}>

          <Form className="attached fluid segment" onSubmit={event => event.preventDefault()}>

            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={menuItems} onTabChange={handleTabChange} />

          </Form>
        </TestContext.Provider>
      </FormProvider>
    </Grid.Column>)
}

export default Main;




