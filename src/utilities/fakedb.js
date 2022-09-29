
const addToDb = id =>{
    let timeCart = {};





    const storedCart = localStorage.getItem('Times');
    if(storedCart){
        timeCart = JSON.parse(storedCart);
    }

   



    const quantity = timeCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        timeCart[id] = newQuantity;
    }
    else{
        timeCart[id] = 1;
    }
    localStorage.setItem('Times', JSON.stringify(timeCart));
}
const getStoreCart=()=>{
    let timeCart = {};

   
    const storedCart = localStorage.getItem('Times');
    if(storedCart){
        timeCart = JSON.parse(storedCart);
    }
return timeCart;
}




const removeFromDb = id =>{
    const storedCart = localStorage.getItem('Times');
    if(storedCart){
        const timeCart = JSON.parse(storedCart);
        if(id in timeCart){
            delete timeCart[id];
            localStorage.setItem('Times', JSON.stringify(timeCart));
        }
    }
}

const deleteTimeCart = () =>{
    localStorage.removeItem('Times');
}





export {
    addToDb, 
    getStoreCart,
    removeFromDb,
    deleteTimeCart
}