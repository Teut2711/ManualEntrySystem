import { Grid } from "semantic-ui-react";
import { useState, createContext } from "react";
import { Form, Tab, Input } from "semantic-ui-react";
import { useForm, FormProvider } from "react-hook-form";
import { getProfileMenu, getTestMenu } from "./SideBar"

export const TestContext = createContext({});
export const TabContext = createContext({});
export const SearchContext = createContext({});

const Main = () => {
  const [testList, setTestList] = useState({});
  const [counter, setCounter] = useState(0);
  const [searchText, setSearchText] = useState("")

  const methods = useForm({ shouldUnregister: false });

  const [currentTabIndex, setCurrentTabIndex] = useState(1);





  const handleTestDeletion = (e, testID) => {
    const filterDict = (dict, filterFunc) =>
      Object.fromEntries(Object.entries(dict).filter(filterFunc));

    setTestList((state) => filterDict(state, ([key, val]) => key !== testID));

    methods.unregister(`patient.tests.${testID}`);
    setCurrentTabIndex(0);
  };

  const menuItems = [...getProfileMenu(), ...getTestMenu(testList, searchText, handleTestDeletion)];


  return (
    <Grid.Column width={16}>
      <FormProvider {...{ ...methods }}>
        <TestContext.Provider
          value={{ counter, setCounter, testList, setTestList }}
        >
          <TabContext.Provider value={{ currentTabIndex, setCurrentTabIndex }}>
            <SearchContext.Provider value={{ searchText, setSearchText }}>
              <Form
                className="attached fluid segment"
                method="post"
                action={"http://localhost:8000"}
              >
                <Tab
                  menu={{ fluid: true, vertical: true, tabular: true }}
                  panes={menuItems}
                  activeIndex={currentTabIndex}
                  onTabChange={(e, { activeIndex }) => {
                    setCurrentTabIndex(activeIndex);
                  }}
                />
              </Form>
            </SearchContext.Provider>
          </TabContext.Provider>
        </TestContext.Provider>
      </FormProvider>
    </Grid.Column>
  );
};

export default Main;
