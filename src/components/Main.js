import PatientDetails, { TestDetails } from "./FormComponents";
import { Grid } from 'semantic-ui-react';
import { useState, createContext } from 'react';
import { Tab } from 'semantic-ui-react'
import { Header, Button, Form, Message } from "semantic-ui-react";
import { useForm, FormProvider } from "react-hook-form";
import { AddTestButton } from "./FormComponents";


export const TestContext = createContext();

const Main = () => {
  const [testList, setTestList] = useState({});
  const methods = useForm({ shouldUnregister: false });
  const [counter, setCounter] = useState(0);
  const [currentTabIndex, setCurrentTabIndex] = useState(1);

  const handleInputChange = (e, { name, value }) => {
    methods.setValue(name, value);
  };

  const handleTestDeletion = (e, testID) => {
    const filterDict = (dict, filterFunc) => Object.fromEntries(
      Object.entries(dict).filter(filterFunc)
    )

    setTestList(state => filterDict(state, ([key, val]) => key !== testID))

    methods.unregister(`patient.tests.${testID}`)
    setCurrentTabIndex(0);

  }

  const handleTabChange = (e, { activeIndex }) => {
    setCurrentTabIndex(activeIndex)
  }

  const details = {
    menuItem: { content: 'Details', color: "violet" },
    render: () => <Tab.Pane key={"Patient Profile"}>
      <Message
        attached
        header="Patient Details"
        content="Fill out the patient details."
      />
      <PatientDetails />
      <AddTestButton />
      <Button color="violet" type="submit">Submit</Button>
    </Tab.Pane>
  }


  const allTests = Object.keys(testList).map(testID => {

    return {
      menuItem: { content: testList[testID].text, color: "violet" },

      render: () => <Tab.Pane key={testList[testID].text}>
        <Message
          attached
          header="Test Details"
          content="Fill out the test details."
        />
        <TestDetails testID={testID} />
        <AddTestButton />
        <Button color="red" type="button" onClick={event => handleTestDeletion(event, testID)}>Remove test</Button>
        <Button color="violet" type="submit" >Submit</Button>
      </Tab.Pane>
    }
  })


  const menuItems = [
    {
      menuItem: {
        header: true, content: <Header as="h3">Patient Profile</Header>, active: false,
        disabled: true,

      }
    },
    details,
    {
      menuItem: {
        header: true, content: <Header as="h3">Tests</Header>, active: false,
        disabled: true
      }
    },
    ...allTests]

  return (
    <Grid.Column width={16}>
      <FormProvider {...{ ...methods, handleInputChange }}  >
        <TestContext.Provider value={{ counter, setCounter, testList, setTestList }} >
          <Form className="attached fluid segment"
            method="post"
            action={"http://localhost:8000"}
          >
            <Tab menu={{ fluid: true, vertical: true, tabular: true }}
              panes={menuItems}
              activeIndex={currentTabIndex}
              onTabChange={handleTabChange} />

          </Form>
        </TestContext.Provider>
      </FormProvider>
    </Grid.Column>)
}

export default Main;




