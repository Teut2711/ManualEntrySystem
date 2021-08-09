import { useContext } from 'react';
import { GetFields } from './Utils'
import { Context } from "../../App"

export const TestDetails = ({ testID }) => {
    const { appState } = useContext(Context);
    return GetFields(
        appState.patient.testSpec,
        name => `patient.tests.${testID}.${name}`)
}

export default TestDetails;