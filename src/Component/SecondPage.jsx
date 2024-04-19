import React ,{useContext} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { multiStepContext } from '../StepContent';
const SecondPage = () => {
  const {setStep ,userData , setUsrData } =useContext(multiStepContext);
  return (
    <div className='secPage'>
      <h1>Skills Details</h1>
    <div>
    <TextField label = "Hard Skill" margin="normal" value={userData["hardskill"] || ''} onChange={(e)=>setUsrData({...userData, "hardskill":e.target.value})} variant = "outlined" color="secondary"></TextField>
    </div>
    <div>
    <TextField label = "Soft Skill" margin="normal" value={userData["softskill"] || ''} onChange={(e)=>setUsrData({...userData, "softskill":e.target.value})} variant = "outlined" color="secondary"></TextField>
    </div>
    <TextField label = "Educational Background" margin="normal" value={userData["EducationalBackground"] || ''} onChange={(e)=>setUsrData({...userData, "EducationalBackground":e.target.value})} variant = "outlined" color="secondary"></TextField>

    <div>
      <div className="">
    <Button variant="contained" onClick={()=>setStep(1)} color="secondary">Back</Button>
    <Button variant="contained" onClick={()=>setStep(3)} color="primary">Next</Button>
    </div>

    </div>
</div>
  )
}

export default SecondPage