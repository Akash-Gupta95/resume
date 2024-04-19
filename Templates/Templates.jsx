import React, {useContext, useState} from 'react'
import './Templates.css'
import TempHeader from './TempHeader'
import TempLeft from './TempLeft'
import TempRight from './TempRight'
import Button from '@mui/material/Button';


import { multiStepContext } from '../src/StepContent';



const Templates = () => {
  const [fname , setfname] = useState("");
  const [JobTitle , setJobTitle] = useState("");
  const [ about, setAbout] = useState("");
  const [contact , setContact] = useState("");
  const [email , setEmail] = useState("");
  const [location , setLocation] = useState("");
  const [hardSkill , sethardSkill] = useState("");
  const [softskill , setSoftskill] = useState("");
  const [EducationBack , setEducationBack] = useState("");
  const [ProfesionalExp , setProfesionalExp] = useState("");
  const [Achivements , setAchivements] = useState("");
  const {FinalData} = useContext(multiStepContext);
   const btnSub = ()=>{
    const data = FinalData[0];
    setfname(data.firstname)
    setJobTitle(data.JobTitle)
    setContact(data.contact)
    setLocation(data.location)
    sethardSkill(data.hardskill)
    setSoftskill(data.softskill)
    setEducationBack(data.EducationalBackground)
    setAchivements(data.achievements)
    setProfesionalExp(data.ProfessionalExperience)
    setEmail(data.email)
    setAbout(data.aboutme);

  }
  

  return (
    <div>
        <TempHeader name = {fname} JobTitle={JobTitle} />
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <TempLeft  contact = {contact} email = {email} location = {location} hardSkill={hardSkill} softskill = {softskill} EducationBack={EducationBack}  />
                </div>
                <div className="col-8">
               < TempRight aboutme = {about}  ProfesionalExp = {ProfesionalExp} Achivements ={Achivements}/>
                </div>
            </div>

            <Button variant="contained" color="warning" onClick={btnSub}>Generate Resume</Button>
        </div>
    </div>
  )
}

export default Templates