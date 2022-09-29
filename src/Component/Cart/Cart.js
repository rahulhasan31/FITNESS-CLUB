import React, { useState } from 'react';
import image from './img/my.png'
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Cart = ({times,}) => {
  const[button,setButton]=useState([])
    const handleAddButton=(e)=>{
       
        setButton(e.target.innerText)
        
    }
    const notify = () => {
        toast("Wow so easy!")
    };

    
    let total=0
    for(const gym of times){
        total=total+gym.time
    }
    
    return (
        <div className='cart '>

              <div className='col '>
              <div className='card h-100"'>
                <div className="img-flex d-flex ">
                <div>
                <img src={image} className='card-img-top ms-5 mt-5' alt="" />
                </div>
                <div>
                <h5 className="card-title mt-5 ms-2">Rahul Hossain</h5>
                </div>
                </div>
                <div className="card-body h-100" >
        
        <h2 className='m-5'>Add A Break</h2>
        <div className='d-flex  gap-1 mb-5 mt-5 ms-4  '>
            
            <div >
                
                <button  onClick={(e)=>handleAddButton(e)} type="button" className="btn btn-primary rounded">10s</button>
            </div>
            <div >
                
                <button  onClick={(e)=>handleAddButton(e)} type="button" className="btn btn-primary">20s</button>
            </div>
            <div>
                
                <button  onClick={(e)=>handleAddButton(e)} type="button" className="btn btn-primary">30s</button>
            </div>
            <div>
                
                <button  onClick={(e)=>handleAddButton(e)} type="button" className="btn btn-primary">40s</button>
            </div>
            <div>
                
                <button  onClick={(e)=>handleAddButton(e)} type="button" className="btn btn-primary">50s</button>
            </div>
                </div>  

                <h1 className='mb-5'>Exercise Details</h1>

                <h2>Exercise time:{total} <small>S</small></h2>
                <h2>Break time:{button} </h2>
                
                <button type="button" className="btn btn-primary mt-5" onClick={notify}>Activity Completed</button>
               </div>
               
               
              </div>
              
              </div>
                       
         <div className='carts col m-2'>
              <div className='card h-100"'>
                
                <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">how to does react work </p>
        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        
        </div>
              </div>
              </div>
         <div className='carts col m-2'>
              <div className='card h-100"'>
                
                <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">props and state difference</p>
        <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
        
        </div>
              </div>
              </div>
         <div className='carts col m-2'>
              <div className='card h-100"'>
                
                <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">What is the use case for useEffect  </p>
        <p>                            useEffect use cases
                            1. Running once on mount: fetch API data
                            2. Running on state change: validating input field
                            3. Running on state change: live filtering
                            4. Running on state change: trigger animation on new array value
                            5. Running on props change: update paragraph list on fetched API data update
                            6. Running on props change: updating fetched API data to get BTC updated price etc.</p>
        
        </div>
              </div>
              </div>
       

       <ToastContainer/>
        </div>
       
    );
};

export default Cart;