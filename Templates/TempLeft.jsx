import React from 'react'

const TempLeft = ({ contact , email, location , hardSkill , softskill ,  EducationBack }) => {
  return (
    <div>
        <div className="container leftContainer">
            <div className="row">
                <div className="col-12 MyContact" >
                    <h1>My Contact</h1>
                    <div></div>
                    <ul>
                        <li>{email}</li>
                        <li>{contact}</li>
                        <li>{location}</li>
                    </ul>
                </div>
                <div className="col-12 HardSkill">
                <h1>Hard Skill</h1>
                <div className="skill">
               
                    {hardSkill}
                    </div>
                </div>
                <div className="col-12 SoftSkill">
                <h1>Soft Skill</h1>
                    <ul>
                        <li>{softskill}</li>
                        {/* <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li> */}
        
                    </ul>
                </div>
                <div className="col-12 EducationBackground">
                    <h1> Education Background</h1>
                    <ul>
                        <li>{EducationBack}</li>
                        {/* <li>Cumque commodi nobis facere animi rem soluta provident sequi voluptatum.</li>
                        <li>Minus earum inventore sequi ex repellendus dolore voluptates at hic.</li>
                        <li>Quo iusto molestiae accusantium beatae iste aspernatur itaque illo tenetur.</li>
                        <li>Quos exercitationem illum eaque voluptatum fuga quo incidunt quae molestias.</li> */}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TempLeft;