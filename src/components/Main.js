import styled from "styled-components";
import PatientProfileForm from "./PatientProfileForm";

export const Main = styled.main`
  grid-column: 3 / span 3;
  
`;

export default (function () {
  return <Main>< PatientProfileForm/></Main>
})