import React from "react";
import { Header, Button, Message, Tab } from "semantic-ui-react";
import TestDetails from "../FormComponents/TestDetails";
import AddTestButton from "../FormComponents/AddTestButton";
import Search from "./SearchItem";


const getTestHeader = () => {
    return {
        menuItem: {
            header: true,
            content: (
                <React.Fragment >
                    <Header as="h3" >Tests</Header>{" "}
                    <Search />
                </React.Fragment>
            ),
            active: false,
            disabled: true,
        },
        render: () => <Tab.Pane key={"Tests Heading"}></Tab.Pane>,
    }
};

const getTestList = (testList, handleTestDeletion) => {

    return Object.keys(testList).map((testID) => {
       
        return {
            menuItem: { content: testList[testID].text, color: "violet" },

            render: () => (
                <Tab.Pane key={testID}>
                    <Message
                        attached
                        header="Test Details"
                        content="Fill out the test details."
                    />
                    <TestDetails testID={testID} />
                    <AddTestButton />
                    <Button
                        color="red"
                        type="button"
                        onClick={(event) => handleTestDeletion(event, testID)}
                    >
                        Remove test
                    </Button>
                    <Button color="violet" type="submit" >
                        Submit
                    </Button>
                </Tab.Pane>
            ),
        };
    })
}


const getTestMenu = (testList, handleTestDeletion) => {
    return [getTestHeader(), ...getTestList(testList, handleTestDeletion)]
}

export default getTestMenu;
