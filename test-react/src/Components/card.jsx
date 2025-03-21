import React from 'react'
import Data from '../Components/Data/data'
import './card.css'


const card = () => {
  return (
    <div className="card">
      {Data.map((index,info) => {
        return (
          <div className="body" key={info}>
            <div  className="user-name">
              <h1>{index.name}</h1>
            </div>
            <div className=" user-email">
                <h2>{index.email}</h2>
            </div>
            <div className="user-age">
                <h3>{index.age}</h3>
            </div>
            
        
          </div>
        );
      })}
    </div>

  )
}

export default card