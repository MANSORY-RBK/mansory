import React from "react";
const UpdateProduct = (props) => {
    
    
  return (
    <form>
      <div className="product-info">
        <label>name:</label>
        <input id="name" type="text"></input>
        <label>descriptions :</label>
        <input id="desc" type="text"></input>
        <label>image url:</label>
        <input id="url" type="text"></input>
        <label>price :</label>
        <input id="price" type="text"></input>
        <label>categories :</label>
        <input id="cat" type="text"></input>
        <button
          onClick={() => {
            props.uprod( {
              name: document.getElementById("name").value,
              description: document.getElementById("desc").value,
              imageUrl: document.getElementById("url").value,
              price: document.getElementById("price").value,
              categories: document.getElementById("cat").value,

            });
            props.chanV("productList") ; 
          }}
        >
          update
        </button>
      </div>
    </form>
  );
};
export default UpdateProduct