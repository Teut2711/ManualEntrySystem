import { useContext, useState } from "react";
import { Button, Modal, Icon, Message } from "semantic-ui-react";
import { useFormContext } from "react-hook-form";
import { TestContext } from "../Main"
import TestDetails from "./TestDetails"

export const AddTestButton = () => {

    const { setError, unregister, getValues } = useFormContext();
    const { counter, setCounter, setTestList } = useContext(TestContext)
    const [open, setOpen] = useState(false);

    const testID = `test${counter}`;


    const handleTestAdditionAccept = () => {

        setTestList(state => {

            let newlyAddedTestName = getValues(`patient.tests.${testID}.name`);
            if (Object.values(getValues("patient.tests")).map(ele => ele.name).slice(0, -1).includes(newlyAddedTestName)) {

                setError(
                    `patient.tests.${testID}.name`,
                    { type: "TEST_ALREADY_EXISTS", message: "Test with this name already exists" },
                    { shouldFocus: true }
                )

                return state;
            }
            let newState = {
                ...state, [testID]: { text: getValues(`patient.tests.${testID}.name`) }
            }
            setCounter(state => state + 1);
            setOpen(false);
            return newState;
        })
    }


    const handleTestAdditionCancel = () => {
        unregister(`patient.tests.${testID}`);
        setOpen(false);
    }
    return <Modal onOpen={() => setOpen(true)}
        open={open}
        trigger={
            <Button positive type="button">
                Add Test
                <span>
                    <Icon name="plus circle" />
                </span>
            </Button>
        }>
        <Modal.Header>
            <Message
                attached
                header="Add a test"
                content="Fill out the test details."
            />
        </Modal.Header>
        <Modal.Content>
            <TestDetails testID={testID} />
        </Modal.Content>
        <Modal.Actions>
            <Button
                key={0}
                color="green"
                type="button"
                onClick={handleTestAdditionAccept}
            >
                OK
            </Button>
            <Button
                key={1}
                color="black"
                type="button"
                onClick={handleTestAdditionCancel}
            >
                Cancel
            </Button>
        </Modal.Actions>
    </Modal>


}

export default AddTestButton;