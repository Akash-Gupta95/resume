import React ,{useContext} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { multiStepContext } from '../StepContent';
import './PagesStyle.css';

const FirstPage = () => {
  const {setStep ,userData , setUsrData } = useContext(multiStepContext);
  return (
    <div className='fpage' >
      <h1>Personal Details</h1>
        <div>
        <TextField label = "First name" value={userData["firstname"] || ''} onChange={(e)=>setUsrData({...userData, "firstname":e.target.value})} margin="normal" variant = "outlined" color="secondary"></TextField>
        </div>
        <div>
        <TextField label = "Job Title" value={userData["JobTitle"] || ''} onChange={(e)=>setUsrData({...userData, "JobTitle":e.target.value})} margin="normal" variant = "outlined" color="secondary"></TextField>

        </div>
        <TextField label = "Contact Number" value={userData["contact"] || ''} onChange={(e)=>setUsrData({...userData, "contact":e.target.value})} margin="normal" variant = "outlined" color="secondary"></TextField>
        <div>
        <TextField label = "email" value={userData["email"] || ''} onChange={(e)=>setUsrData({...userData, "email":e.target.value})} margin="normal" variant = "outlined" color="secondary"></TextField>

        </div>
        <div>
        <TextField label = "location" value={userData["location"] || ''} onChange={(e)=>setUsrData({...userData, "location":e.target.value})} margin="normal" variant = "outlined" color="secondary"></TextField>

        </div>
        <div>
        <Button variant="contained" onClick={()=>setStep(2)} color="primary">Next</Button>
        </div>
    </div>
  )
}

export default FirstPage