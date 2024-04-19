import React from 'react'

const TempHeader = ({name , JobTitle}) => {
  return (
    <div>
       <div className="container-fluid Header">
        <div className="row">
            <div className="col-4 imgDiv">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEs0YX4eAK8MYoBXboimFM-FM2geCKbwkW5g8PLQGYpA&s" alt="imgtag" />
            </div>
            <div className="col-8">
                <div className="col HeaderName">{name}</div>
                <div className="col HeaderJobTitle">{JobTitle}</div>
            </div>
        </div>
        
       </div>
    </div>
  )
}

export default TempHeader