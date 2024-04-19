import React from 'react'

const TempRight = ({aboutme  , ProfesionalExp, Achivements}) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 AboutMe">
                <h1>About Me</h1>
                <div className="aboutmeDes">
                    {aboutme}
                </div>
            </div>
            <div className="col-12 ProfessionalExprerinece">
            <h1>Professional Experience</h1>
                <div className="ProfessionalExpDetails">
                   {ProfesionalExp}
                </div>
            </div>
            <div className="col-12 Achievements">
            <h1>Achievements</h1>
                <div className="AchievementsDetails">
                  {Achivements}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TempRight