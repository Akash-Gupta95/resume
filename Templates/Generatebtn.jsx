import React from 'react'

const Generatebtn = () => {

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


}

export default Generatebtn