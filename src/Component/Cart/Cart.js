import React from 'react';

const Cart = ({times}) => {
    console.log(times);
    
    let total=0
    for(const gym of times){
        total=total+gym.time
    }
    
    return (
        <div>
              <div className='col'>
              <div className='card h-100"'>
                <img src="" className='card-img-top' alt="" />
                <div className="card-body h-100" >
        <h5 className="card-title">Rahul Hossain</h5>
        <h1>Add A Break</h1>
        <div className='d-flex ms-5 gap-1'>
            
            <div >
                
                <button type="button" className="btn btn-primary rounded">10s</button>
            </div>
            <div >
                
                <button type="button" className="btn btn-primary">20s</button>
            </div>
            <div>
                
                <button type="button" className="btn btn-primary">30s</button>
            </div>
            <div>
                
                <button type="button" className="btn btn-primary">40s</button>
            </div>
            <div>
                
                <button type="button" className="btn btn-primary">50s</button>
            </div>
                </div>  

                <h1>Exercise Details</h1>

                <h2>Exercise time:{total}<small>Seconds</small></h2>
                <h2>Break time: </h2>
                
               </div>
               
              </div>
              </div>
        </div>
    );
};

export default Cart;