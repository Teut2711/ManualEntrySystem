import { Header, Button, Message, Tab } from "semantic-ui-react";
import TestDetails from "../FormComponents/TestDetails";
import { TestContext, TabContext } from "../Main";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import AddTestButton from "../FormComponents/AddTestButton";
import Search from "./SearchItem";


const TestsHeader = {
    menuItem: {
        header: true,
        content: (
            <>
                <Header as="h3">Tests</Header>{" "}
                <Search />
            </>
        ),
        active: false,
        disabled: true,
    },
    render: () => <Tab.Pane key={"Tests Heading"}></Tab.Pane>,
};

const TestsList = () => {
    const { testList, setTestList } = useContext(TestContext);
    const { setCurrentTabIndex } = useContext(TabContext)
    const { unregister } = useFormContext();

    const handleTestDeletion = (e, testID) => {
        const filterDict = (dict, filterFunc) =>
            Object.fromEntries(Object.entries(dict).filter(filterFunc));

        setTestList((state) => filterDict(state, ([key, val]) => key !== testID));

        unregister(`patient.tests.${testID}`);
        setCurrentTabIndex(0);
    };


    return Object.keys(testList).map((testID) => {
        return {
            menuItem: { content: testList[testID].text, color: "violet" },

            render: () => (
                <Tab.Pane key={testList[testID].text}>
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
    })
}



const TestsMenu = [TestsHeader, ...TestsList]

export default TestsMenu;
