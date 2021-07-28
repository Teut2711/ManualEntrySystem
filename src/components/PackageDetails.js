import {  Form } from "semantic-ui-react";
import { useContext, useEffect } from "react";
import { FormContext } from "./PatientProfileForm";


const PackageDetails = ({ packageName, index }) => {

  const package_ = `package${index}`;
  const profilesList = [
    { key: "0", text: "Lipid Profile", value: "Lipid Profile" },
    { key: "1", text: "Glucose, Fasting", value: "Glucose, Fasting" },
  ];
  const { register,
    handleInputChange,
    triggerValidation
  } = useContext(FormContext)

  useEffect(
    () => {

      register(`${package_}.sampleType`, { required: true });
      register(`${package_}.sampleCollectionDate`, { required: true });
      register(`${package_}.sampleReceivedDate`, { required: true });
      register(`${package_}.approvalDate`, { required: true });
      register(`${package_}.isNabl`, { required: true });
    });

  return <>
    <fieldset>
      <legend>
        <h1>Package Details</h1>
        <h1>{package_}</h1>

      </legend>

      <ul>
        {
          profilesList.map(
            (profile, index) => {
              return <>
                <li>{profile.text}</li>
                <Form.Input
                  fluid
                  label='Name'
                  name={`${package_}.sampleType`}
                  placeholder='Enter name'
                  onChange={handleInputChange} />

                <Form.Input
                  fluid
                  label='Name'
                  name={`${package_}.sampleCollectionDate`}
                  placeholder='Enter name'
                  onChange={handleInputChange} />
                <Form.Input
                  fluid
                  label='Name'
                  name={`${package_}.sampleReceivedDate`}
                  placeholder='Enter name'
                  onChange={handleInputChange} /><Form.Input
                  fluid
                  label='Name'
                  name={`${package_}.approvalDate`}
                  placeholder='Enter name'
                  onChange={handleInputChange} /><Form.Input
                  fluid
                  label='Name'
                  name={`${package_}.isNabl`}
                  placeholder='Enter name'
                  onChange={handleInputChange} />
              </>
            })
        }
      </ul>

    </fieldset>
  </>

};
export default PackageDetails;
