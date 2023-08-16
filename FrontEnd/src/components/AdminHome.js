import React from 'react';
const AdminHome = (props) => {

    
return(
         <div > 
            <button className='addbutton' onClick={()=>{props.chanV("AddProduct")}}>add</button>  
        <div className='products-list'>
            
            {
                props.product.map((e, i) => {
                    
                    
                    return(<div className="product-card">
                    <img src={e.imageUrl} alt="image"  />
                    <h2>{e.name}</h2>
                    <p style={{ color: 'rgb(212, 177, 112)' }}>{e.description}</p>
                    <p className='card-item-price' style={{ color: 'white' }}>Price: ${e.price}</p>
                    <p className='card-item-cat' style={{ color: 'white' }}>Categories: {e.category}</p>
                    <div className="product-card-buttons">
                    <button onClick={()=>{props.upProd(e._id); console.log("🚀 ~ file: AdminHome.js:20 ~ props.product.map ~ e.name:", e.name)}} >update</button>
                    
                    <button onClick={()=>{props.delete(e._id) ;   console.log("🚀 ~ file: AdminHome.js:10 ~ props.product.map ~ e:", e._id)}}>Delete Product</button>
                    </div>
                </div>)
                })
            }
        </div>
        </div>  
 
)
        }
export default AdminHome;
