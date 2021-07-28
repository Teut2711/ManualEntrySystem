import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { createContext, useState } from "react";
import { Container, Grid } from 'semantic-ui-react'


export const Context = createContext();


function App() {
  
  const [patientPackages, setPatientPackages] = useState([]);

  const [formview, setFormView] = useState({ name: "profile", index: null });
  

  return (
    <Context.Provider value={{  patientPackages, setPatientPackages , formview, setFormView }}>
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
