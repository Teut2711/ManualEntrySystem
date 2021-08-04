// import { Form } from "semantic-ui-react";
// import { useContext, useEffect } from "react";
// import { FormContext } from "./PatientProfileForm";
// import { Accordion } from 'semantic-ui-react'


// const PackageDetails = ({ packageName, index }) => {

//   const package_ = `package${index}`;

//   const { register,
//     handleInputChange
//   } = useContext(FormContext)



//   useEffect(
//     () => {

//       register(`${package_}.sampleType`, { required: true });
//       register(`${package_}.sampleCollectionDate`, { required: true });
//       register(`${package_}.sampleReceivedDate`, { required: true });
//       register(`${package_}.approvalDate`, { required: true });
//       register(`${package_}.isNabl`, { required: true });
//       register(`${package_}.observation_time`, { required: true });
//       register(`${package_}.value`, { required: true });
//       register(`${package_}.MinValue`, { required: true });
//       register(`${package_}.MaxValue`, { required: true });
//       register(`${package_}.unit`, { required: true });
//       register(`${package_}.method`, { required: true });
//       register(`${package_}.impression`, { required: true });

//     });
  
//   const units = [
//     { key: '1', text: 'mg', value: 'mg' },
//     { key: '2', text: 'ng/mL', value: 'ng' },
//     { key: '3', text: 'μmol/L', value: 'mumol' },
//   ]


//   const Level1aContent = (
//     <div>
    
//       <Form.Input
//         fluid
//         label='Observation time'
//         name={`${package_}.observation_time`}
//         placeholder='Enter sample collection date...'
//         onChange={handleInputChange} />
//       <Form.Input
//         fluid
//         label='Value'
//         name={`${package_}.value`}
//         placeholder='Enter sample received date...'
//         onChange={handleInputChange} />
//       <Form.Input
//         fluid
//         label='Mininum value'
//         name={`${package_}.MinValue`}
//         placeholder='Enter approval date'
//         onChange={handleInputChange} />
//       <Form.Input
//         fluid
//         label='Maximum value'
//         name={`${package_}.MaxValue`}
//         placeholder='Enter is Nabl...'
//         onChange={handleInputChange} />
//       <Form.Select
//         fluid
//         options={ units}
//         label='Unit'
//         name={`${package_}.unit`}
//         placeholder='Enter units...'
//         onChange={handleInputChange} />
//       <Form.Input
//         fluid
//         label='Method'
//         name={`${package_}.method`}
//         placeholder='Enter method...'
//         onChange={handleInputChange} />
//       <Form.Input
//         fluid
//         label='Impression'
//         name={`${package_}.impression`}
//         placeholder='Enter impression...'
//         onChange={handleInputChange} />

//     </div>

//   )
//   const level1Panels = [
//     { key: 'panel-1a', title: 'Triglycerides', content: { content: Level1aContent } },
//     { key: 'panel-1b', title: 'Non-Hdl Cholesterol', content: 'Level 1B Contents' },
//   ]

//   const Level1Content = (
//     <div>
//       <Form.Input
//         fluid
//         label='Sample Type'
//         name={`${package_}.sampleType`}
//         placeholder='Enter sample type...'
//         onChange={handleInputChange} />

//       <Form.Input
//         fluid
//         label='Sample Collection Date'
//         name={`${package_}.sampleCollectionDate`}
//         placeholder='Enter sample collection date...'
//         onChange={handleInputChange} />
//       <Form.Input
//         fluid
//         label='Sample Received Date'
//         name={`${package_}.sampleReceivedDate`}
//         placeholder='Enter sample received date...'
//         onChange={handleInputChange} /><Form.Input
//         fluid
//         label='Approval Date'
//         name={`${package_}.approvalDate`}
//         placeholder='Enter approval date'
//         onChange={handleInputChange} /><Form.Input
//         fluid
//         label='Is Nabl'
//         name={`${package_}.isNabl`}
//         placeholder='Enter is Nabl...'
//         onChange={handleInputChange} />
//       <Accordion.Accordion panels={level1Panels} />
//     </div>
//   )


//   const level2Panels = [
//     { key: 'panel-2a', title: 'Glucose, Fasting', content: 'Level 2A Contents' },
//   ]

//   const Level2Content = (
//     <div>
//       Welcome to level 2
//       <Accordion.Accordion panels={level2Panels} />
//     </div>
//   )

//   const rootPanels = [
//     { key: 'panel-1', title: 'Lipid Profile', content: { content: Level1Content } },
//     { key: 'panel-2', title: 'Glucose, Fasting', content: { content: Level2Content } },
//   ]




//   // const profilesList = [
//   //   { key: "0", text: "Lipid Profile", value: "Lipid Profile" },
//   //   { key: "1", text: "Glucose, Fasting", value: "Glucose, Fasting" },
//   // ];

//   return <>

//     <fieldset>
//       <legend>
//         <h1>Package Details</h1>
//         <h1>{packageName}</h1>

//       </legend>
//       <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
//       {/* 
//       <ul>
//         {
//           profilesList.map(
//             (profile, index) => {
//               return <>
//                 <li>{profile.text}</li>
             
//               </>
//             })
//         }
//       </ul>
//  */}
//     </fieldset>
//   </>

// };
// export default PackageDetails;
