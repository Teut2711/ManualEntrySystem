import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { createContext, useState } from "react";
import {  Grid } from 'semantic-ui-react';
import details from "./patientDetails"
import tests from "./patientTests";
export const Context = createContext();





function App() {




  const [patientPackages, setPatientPackages] = useState([]);

  const [formview, setFormView] = useState({ name: "profile", index: null });
  const [appState, setAppState] = useState({
    patient: {
      details: details,
      tests: tests
    },
  }
  );


  return (
    <Context.Provider value={{ appState, setAppState, patientPackages, setPatientPackages, formview, setFormView }}>
      <Grid columns={2} divided>
        <Grid.Row>
          <NavBar />
        </Grid.Row>
        <Grid.Row>
          <Main />
        </Grid.Row>
      </Grid>
    </Context.Provider>
  );
}

export default App;
