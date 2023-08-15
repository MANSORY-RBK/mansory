import React from 'react';
const Home = (props) => {

    
return(
   
        <div className='products-list'>
            {
                props.product.map((e, i) => {
                    return(<div className="product-card">
                    <img src={e.imageUrl} alt="image" onClick={()=>props.stal(e) }/>
                    <h2>{e.name}</h2>
                    <p className='card-item-price' style={{ color: 'white',fontFamily:"FF DIN", fontSize: '18px'  }}>Price: ${e.price}</p>
                    <p className='card-item-cat' style={{ color: 'white' , fontSize: '18px' }}>Categories: {e.category}</p>
                    <div className="product-card-buttons">
                        <button onClick={()=>props.cartp(e)}>ADD TO CART</button>
                    </div>
                </div>)
                })
            }
        </div>
 
)
        }
export default Home;
