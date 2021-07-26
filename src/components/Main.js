import PatientProfileForm from "./PatientProfileForm";
import styled from "styled-components";
import TestDetails from "./TestDetails";
import { useContext } from "react";
import { Context } from "../App";

export const Main = styled.main`
  grid-column: 3 / span 3;
  
`;

export default (function () {
  const { mainContent } = useContext(Context);

  const mainContentfunc = () => {
    switch (mainContent) {
      case "profile":
        return <PatientProfileForm />

      default:
        return <TestDetails testName={mainContent} />

    }
  }
  return <Main>
    {
      mainContentfunc()
    }


  </Main>
})