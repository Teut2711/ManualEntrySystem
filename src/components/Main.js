import PatientProfileForm from "./PatientProfileForm";
import { Grid } from 'semantic-ui-react';
import { useState } from 'react';
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


const Main = () => {
  const [testList, setTestList] = useState([]);


  const menuItems = [...testList.map(({ text }, index) => {
    return {
      menuItem: text, render: () => <Tab.Pane>
        ... </Tab.Pane>
    }
  }), {
    menuItem: 'Patient Profile', render: () => <Tab.Pane>
      <PatientProfileForm testList={testList} setTestList={setTestList} />
    </Tab.Pane>
  }]


  return (<Grid.Column width={16}>
    <Form className="attached fluid segment">
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={menuItems} />
    </Form>
  </Grid.Column>)
}
export default Main;




