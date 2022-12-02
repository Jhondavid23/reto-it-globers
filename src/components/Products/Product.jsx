import React from 'react';
import product from './style/product.module.css'

function Product({products}) {
  if(!products.name){
    return <figure className={product.onlyImage}>
            <img src={products.image} alt="product" className={product.img} /> 
            {products.id === 1 ? <div className={product.divButtomShop}>
                <button className={product.buttonShop} >SHOP</button>
                </div>:false}
        </figure>
    
  }
  if(products.name){
    return <div className={product.productCard} >
        <figure className=''>
            <img src={products.image} alt="another-product" className={product.imgDescription}/>
        </figure>
        <article >
            <h4 className={product.title}>{products.name}</h4>
            <p className={product.description}>{products.description}</p>
        </article>
        <button className={product.buttonSeeMore}>{"> VER MÁS"}</button>
    </div>
  }
}

export default Product