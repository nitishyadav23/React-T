import React from 'react'
import Data from '../Components/Data/data'
import './card.css'


const card = () => {
  return (
    <div className="card">
      {CardData.map((body, info) => {
        return (
          <div className="body" key={info}>
            <div  className="user-name">
              <h1>{body.name}</h1>
            </div>
            <div className=" user-email">
                <h2>{body.email}</h2>
            </div>
            <div className="user-age">
                <h3>{body.age}</h3>
            </div>
            
        
          </div>
        );
      })}
    </div>

  )
}

export default card