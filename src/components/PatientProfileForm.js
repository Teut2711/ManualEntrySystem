import React, { useContext, useEffect, useReducer, useState } from "react";
import { Button, Form, List } from 'semantic-ui-react'
import { Context } from "../App";


const PatientDetails = () => {

  // TODO: Use useState instead of useReducer in refactor

  const [patientDetails, dispatchPatientDetails] = useReducer(patientDetailsReducer, {
    name: "John Doe",
    gender: "male",
    age: 34,
    referredBy: "self",
  });
  const { name, gender, age, referredBy } = patientDetails;
  const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

  return <fieldset>
    <legend>
      <h1>Patient Details</h1>
    </legend>
    <Form.Input
      fluid
      label='Name'
      placeholder='Enter name'
      value={name}
      onChange={event => dispatchPatientDetails({
        type: "NAME",
        value: event.target.value
      })} />

    <Form.Select
      fluid
      label='Gender'
      options={genderOptions}
      placeholder='Gender'
      onChange={event => dispatchPatientDetails({
        type: "GENDER",
        value: event.target.value
      })}

    />
    <Form.Input
      fluid
      label='Age'
      placeholder='Enter age'
      value={age}
      onChange={event => dispatchPatientDetails({
        type: "AGE",
        value: event.target.value
      })} />

    <Form.Input
      fluid
      label='Referred By'
      placeholder='Referred By'
      value={referredBy}
      onChange={event => dispatchPatientDetails({
        type: "REFERRED-BY",
        value: event.target.value
      })} />

  </fieldset>


}






const PatientTestResults = () => {

  const { patientTestPackages, handleSideBarPackageList } = useContext(Context);
  
  const addTestToSidebar = () => {

    let test = document.getElementById("add-test");
    let testName = test.value;
    handleSideBarPackageList(testName);
    test.value = "";
  }

  return (
    <fieldset>
      <legend>
        Results
      </legend>
      <Form.Input
        fluid
        id="add-test"
        placeholder='Enter package name...'
      />
      <Button type="button" circular icon='plus' onClick={addTestToSidebar} />
      <List divided verticalAlign='middle'>
        {patientTestPackages.map((testName, index) => <List.Item key={index}>{testName}</List.Item>)}
      </List>
    </fieldset>

  )
}




const patientDetailsReducer = (state, action) => {
  switch (action.type) {
    case 'NAME': return { ...state, name: action.value };
    case 'AGE': return { ...state, age: action.value };
    case 'GENDER': return { ...state, gender: action.value };
    case 'REFERRED-BY': return { ...state, referredBy: action.value };
    default:
      throw new Error("No such available patient detail");
  }

};

export default function PatientProfileForm() {



  return <Form>
    <PatientDetails />
    <PatientTestResults />
    <button type="submit">Submit</button>
  </Form>

}
