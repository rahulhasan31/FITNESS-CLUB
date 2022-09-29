import React, { useState } from 'react';
import image from './img/my.png'
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';


const Cart = ({times,}) => {
  const[button,setButton]=useState([])
    const handleAddButton=(e)=>{
       
        setButton(e.target.innerText)
    }
    const handleToast=()=>{
       
        console.log( toast("Wow so easy!"));
    }

    
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
        
        <h1 className='m-5'>Add A Break</h1>
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
                
                <button type="button" className="btn btn-primary mt-5" onClick={handleToast}>Activity Completed</button>
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
        <p className="card-text">For Age : </p>
        <p>Time required : s</p>
        
        </div>
              </div>
              </div>

        </div>
    );
};

export default Cart;