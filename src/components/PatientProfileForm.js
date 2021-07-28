import React, { createContext, useContext, useEffect } from "react";
import { Button, Form, List } from 'semantic-ui-react'
import { Context } from "../App";
import { useForm } from "react-hook-form";
import PackageDetails from './PackageDetails'
// Results := <Package>+
// Package := <Profile>+
// Profile := <Test>+
// Test := 


export const FormContext = createContext()

export default function PatientProfileForm() {

  const { formview } = useContext(Context);
  const {
    register,
    errors,
    handleSubmit,
    setValue,
    triggerValidation,
    getValues
  } = useForm();

  const handleInputChange = (e, { name, value }) => {
    setValue(name, value);
  }

  const mainContentfunc = () => {
    switch (formview.name) {

      case "profile":
        return <>
          <PatientDetails />
          <PatientTestResults />
        </>
      default:
        return <PackageDetails packageName={formview.name} index={formview.index} />


    }
  }


  return <FormContext.Provider value={
    {
      register,
      handleInputChange,
      triggerValidation,
      getValues
    }}>
        <Form>
      {
        mainContentfunc()
      }
      <button type="submit">Submit</button>
    </Form>
  </FormContext.Provider>

}




const PatientDetails = () => {

  const { register,
    handleInputChange,
    triggerValidation
  } = useContext(FormContext)

  useEffect(() => {
    register("patient.name", { required: true });
    register("patient.age", { required: true });
    register("patient.gender", { required: true });
    register("patient.referredBy", { required: true });
  });

  //const { name, gender, age, referredBy } = patientDetails;
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
      name="patient.name"
      placeholder='Enter name'
      onChange={handleInputChange} />

    <Form.Select
      fluid
      name="patient.gender"
      label='Gender'
      options={genderOptions}
      placeholder='Select Gender...'
      onChange={handleInputChange} />

    <Form.Input
      fluid
      name="patient.age"
      label='Age'
      placeholder='Enter age...'
      onChange={handleInputChange} />

    <Form.Input
      fluid
      name="patient.referredBy"
      label='Referred By'
      placeholder='Referred By...'
      onChange={handleInputChange} />

  </fieldset>


}






const PatientTestResults = () => {

  useEffect(() => {
    register("patient.packageSelector", { required: true });
  });


  const { register,
    handleInputChange,
    triggerValidation,
    getValues
  } = useContext(FormContext)

  const { patientPackages, setPatientPackages } = useContext(Context);

  const packageOptions = [
    { key: '0', text: 'Good Health Package', value: 'Good Health Package' },
    { key: '1', text: 'Better Health Package', value: 'Better Health Package' },
  ]


  const addPackage = () => setPatientPackages(state => [...state, getValues("profile.packageSelector")])

  const removePackage = (index) => setPatientPackages(state => state.filter((_, i) => i !== index));

  return (
    <fieldset>
      <legend>
        Results
      </legend>
      <Form.Select
        fluid
        name="patient.packageSelector"
        label='Packages'
        options={packageOptions}
        placeholder='Select packages...'
        onChange={handleInputChange} />

      <Button type="button" circular icon='plus' onClick={addPackage} />
      <List divided verticalAlign='middle'>
        {patientPackages.map((testName, index) => {

          return <List.Item key={index}>
            {testName}
            <Button type="button" circular icon='delete' onClick={() => removePackage(index)} />
          </List.Item>

        })}
      </List>

    </fieldset>

  )
}

