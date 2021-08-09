import { useContext } from 'react'
import { Context } from "../../App"
import { GetFields } from "./Utils"

const PatientDetails = () => {
    const { appState } = useContext(Context);
    return GetFields(
        appState.patient.detailsSpec,
        name => `patient.${name}`
    )

}
export default PatientDetails;
