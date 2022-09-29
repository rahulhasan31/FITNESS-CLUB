import React from 'react';
import './GymCard.css'

const GymCard = ({gym,handleAddToTime}) => {
    const {name,age,time,picture ,id ,}=gym

   
   
    return (
        <div className='container'>
           
                   
         <div className='col m-2'>
              <div className='card h-100"'>
                <img src={picture} className='card-img-top' alt="" />
                <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">For Age : {age}</p>
        <p>Time required : {time}s</p>
        <div>
            <button onClick={()=>handleAddToTime(gym)} type="button" className="btn btn-primary">Add to list</button>
         
        </div>
        </div>
              </div>
              </div>

       
              


              
            
        </div>
    );
};

export default GymCard;