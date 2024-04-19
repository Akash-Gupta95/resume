import React, { useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { multiStepContext } from "../StepContent";
import Templates from "../../Templates/Templates";
import {Link} from 'react-router-dom';
const ThirdPage = () => {
  const { setStep, userData, setUsrData, submitData } =
    useContext(multiStepContext);

  return (
    <div className="thPage">
      <h1>About Details</h1>
      <div>
        <TextField
          label="About Me"
          margin="normal"
          value={userData["aboutme"] || ""}
          onChange={(e) => setUsrData({ ...userData, aboutme: e.target.value })}
          variant="outlined"
          color="secondary"
        ></TextField>
      </div>
      <div>
        <TextField
          label="Professional Experience"
          margin="normal"
          value={userData["ProfessionalExperience"] || ""}
          onChange={(e) =>
            setUsrData({ ...userData, ProfessionalExperience: e.target.value })
          }
          variant="outlined"
          color="secondary"
        ></TextField>
      </div>
      <TextField
        label="Achievements"
        margin="normal"
        value={userData["achievements"] || ""}
        onChange={(e) =>
          setUsrData({ ...userData, achievements: e.target.value })
        }
        variant="outlined"
        color="secondary"
      ></TextField>
      <div>
        <Button
          variant="contained"
          onClick={() => setStep(2)}
          color="secondary"
        >
          Back
        </Button>
       
        <Link to={"/templates"}> <Button variant="contained" onClick={submitData} color="primary">
          Submit
        </Button></Link>

      </div>
    </div>
  );
};

export default ThirdPage;
