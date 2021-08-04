import "semantic-ui-css/semantic.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { createContext, useEffect, useState } from "react";
import { Container, Grid } from 'semantic-ui-react';
import details from "./patientDetails"
import tests from "./patientTests";
export const Context = createContext();





function App() {

  // const details = async () => JSON.parse(await fs.readFile('patientDetails.json', 'utf8'));
  // const tests = async () => JSON.parse(await fs.readFile('patientTests.json', 'utf8'));



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
