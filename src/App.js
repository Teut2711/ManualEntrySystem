import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { createContext, useState } from "react";
import { Container, Grid } from 'semantic-ui-react'


export const Context = createContext();


function App() {
  
  const [patientTestPackages, setPatientTestPackages] = useState([]);

  const [mainContent, setMainContent] = useState("profile");

  const handleMainContent = (mainContent) => {
    setMainContent(mainContent);
  }

  const handleSideBarPackageList  = (newPackage) => {
    setPatientTestPackages(state => [...state, newPackage]);
  }

  return (
    <Context.Provider value={{ patientTestPackages, handleSideBarPackageList , mainContent, handleMainContent }}>
      <Container >
        <Grid columns={2} divided>
          <Grid.Row>
            <NavBar />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={4}>  <SideBar />  </Grid.Column>
            <Grid.Column width={12}>  <Main /> </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Context.Provider>
  );
}

export default App;
