import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import GymCard from '../GymCard/GymCard';
import './Gyms.css'

const Gyms = () => {
    const [gyms, setGyms]=useState([])
    const [times, setTime]=useState([])
    useEffect(()=>{
      fetch('data.json')
      .then(res=>res.json())
      .then(data=>setGyms(data))
                 
    },[])
    const handleAddToTime=(gyms)=>{
  
  const newTime=[...times,gyms]
  setTime(newTime)
    }
   
    return (
        <div className='gyms '>
            <h1>FITNESS HEROES{gyms.length}</h1>
             <p>Select today’s exercise</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 m-5">
             
             {
                gyms.map(gym=><GymCard
                gym={gym}
                key={gym.id}
                handleAddToTime={handleAddToTime}
                times={times}
                setTime={setTime}
              
            
                

              
                ></GymCard>)
             }
            </div>
            <div className='row row-cols-1 row-cols-md-3 g-4 m-5 h-100'>
           
            <Cart times={times}></Cart>
            </div>
        </div>
    );
};

export default Gyms;