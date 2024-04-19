import React , {useContext} from 'react'
import { multiStepContext } from '../StepContent';

const DisplayData = () => {
  const {userData ,FinalData } = useContext(multiStepContext);
    console.log(FinalData)
  return (
    <div>
    {FinalData.length > 0 ? (
        <ul>
            {FinalData.map((data, index) => (
                <li key={index}>
                    <div>First Name: {data.firstname}</div>
                    <div>Last Name: {data.LastName}</div>
                    <div>Contact: {data.contact}</div>
                </li>
            ))}
        </ul>
    ) : (
        <div>No data available</div>
    )}
</div>
  )
}

export default DisplayData