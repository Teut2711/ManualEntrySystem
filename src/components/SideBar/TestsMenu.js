import React, { useContext} from "react";
import { Input, Header, Button, Message, Tab } from "semantic-ui-react";
import TestDetails from "../FormComponents/TestDetails";
import AddTestButton from "../FormComponents/AddTestButton";
import {SearchContext} from "../Main";

const SearchInput = () => {
    const { searchText, setSearchText } = useContext(SearchContext);
    return (
        <Input
            icon="search"
            placeholder="Search..."
            value={searchText}
            onChange={(e, { value }) => {
                setSearchText(value) }}
        />
    );
};
const getTestHeader = () => {
    return {
        menuItem: {
            header: true,
            content: (
                <React.Fragment>
                    <Header as="h3">Tests</Header>
                    <SearchInput />
                </React.Fragment>
            ),
            active: false,
            disabled: true,
        },
        render: () => <Tab.Pane key={"Tests Heading"}></Tab.Pane>,
    };
};

const getTestList = (testList,searchText, handleTestDeletion) => {
    const checkQueryinSearchText = (testID) => {
        return (!searchText) || testList[testID].text.toLowerCase().includes(searchText.toLowerCase())
    }
    return Object.keys(testList)
        .filter(checkQueryinSearchText)
        .slice(0, 10)
        .map((testID) => {
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
                        <Button color="violet" type="submit">
                            Submit
                        </Button>
                    </Tab.Pane>
                ),
            };
        });
};

const getTestMenu = (testList,searchText, handleTestDeletion) => {
    return [getTestHeader(), ...getTestList(testList,searchText, handleTestDeletion)];
};

export default getTestMenu;
