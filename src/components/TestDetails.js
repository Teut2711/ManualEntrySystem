import { Button, Form, List } from 'semantic-ui-react'


const TestDetails = ({ testName }) => {


    return <>
        <fieldset>
            <legend>
                <h1>Package Details</h1>

            </legend>

            <Form.Input
                fluid
                label='Package Name'
                value={testName}
                placeholder='Enter name'
            />



            <Form.Input
                fluid
                label='Sample Type'
                placeholder='Enter name'
            />

            <Form.Input
                fluid
                label='Sample Collection Date'
                placeholder='Enter name'
            />
            <Form.Input
                fluid
                label='Sample Received Date'
                placeholder='Enter name'
            />

            <Form.Input
                fluid
                label="Approval Date"

                placeholder='Enter name'
            />

            <Form.Input
                fluid
                label="IsNabl"
                placeholder='Enter name'
            />

        </fieldset>
        <fieldset>
            <Form.Input
                fluid
                label="name"
                placeholder='Enter name'
            />
            <Form.Input
                fluid
                label="observation_time"
                placeholder='Enter name'
            />
            <Form.Input
                fluid
                label="value"
                placeholder='Enter name'
            />
            <Form.Input
                fluid
                label="MinValue"
                placeholder='Enter name'
            />
            <Form.Input
                fluid
                label="MaxValue"
                placeholder='Enter name'
            />
            <Form.Input
                fluid
                label="unit"
                placeholder='Enter name'
            />
            <Form.Input
                fluid
                label="method"
                placeholder='Enter name'
            />
            <Form.Input
                fluid
                label="impression"
                placeholder='Enter name'
            />


        </fieldset>
    </>


}
export default TestDetails;
