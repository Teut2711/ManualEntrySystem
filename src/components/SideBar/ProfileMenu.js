import {
    Header,
    Button,
    Message,
    Tab
} from "semantic-ui-react";
import { PatientDetails, AddTestButton } from "../FormComponents";


const getProfileHeader = () => {
    return {
        menuItem: {
            header: true,
            content: <Header as="h3">Patient Profile</Header>,
            active: false,
            disabled: true,
        },
        render: () => {
            <Tab.Pane key="Patient Profile Heading"></Tab.Pane>;
        },
    }
}


const getProfileList = () => {
    return {
        menuItem: { content: "Details", color: "violet" },
        render: () => (
            <Tab.Pane key={"Patient Profile"}>
                <Message
                    attached
                    header="Patient Details"
                    content="Fill out the patient details."
                />
                <PatientDetails />
                <AddTestButton />
                <Button color="violet" type="submit">
                    Submit
                </Button>
            </Tab.Pane>
        ),
    }
};
const getProfileMenu = () => {
    return [getProfileHeader(), getProfileList()]
}




export default getProfileMenu;
