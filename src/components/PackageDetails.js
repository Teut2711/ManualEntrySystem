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
        <h1>{packageName}</h1>

      </legend>

      <ul>
        {
          profilesList.map(
            (profile, index) => {
              return <>
                <li>{profile.text}</li>
                <Form.Input
                  fluid
                  label='Sample Type'
                  name={`${package_}.sampleType`}
                  placeholder='Enter sample type...'
                  onChange={handleInputChange} />

                <Form.Input
                  fluid
                  label='Sample Collection Date'
                  name={`${package_}.sampleCollectionDate`}
                  placeholder='Enter sample collection date...'
                  onChange={handleInputChange} />
                <Form.Input
                  fluid
                  label='Sample Received Date'
                  name={`${package_}.sampleReceivedDate`}
                  placeholder='Enter sample received date...'
                  onChange={handleInputChange} /><Form.Input
                  fluid
                  label='Approval Date'
                  name={`${package_}.approvalDate`}
                  placeholder='Enter approval date'
                  onChange={handleInputChange} /><Form.Input
                  fluid
                  label='Is Nabl'
                  name={`${package_}.isNabl`}
                  placeholder='Enter is Nabl...'
                  onChange={handleInputChange} />
              </>
            })
        }
      </ul>

    </fieldset>
  </>

};
export default PackageDetails;
