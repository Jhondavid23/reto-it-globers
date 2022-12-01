import React from 'react'
import Navbar from '../navbar/Navbar'
import main from './style/mainProduct.module.css'

function MainProduct(props) {
    return (
        <div className={main.container}>
            <nav className={main.nav}>
                <Navbar />
            </nav>
            <figure className={main.figure}>
                <img src={require(`../../images/${props.selectedImage}`)} alt="puff-wallpaper" className={main.img}/>

            </figure>
            <div className={main.containerButton}>
                <button onClick={props.previous} className={main.bottonChangeImage}>{"<"}</button>
                <button onClick={props.next} className={main.bottonChangeImage}>{">"}</button>
            </div>
            <div className={main.article}>
                <p>ESTÁR CÓMODO,</p>
                <p>NUNCA FUE TAN FÁCIL</p>
                
            </div>
            <div className={main.buttonContainer}>
            <button className={main.button}>SHOP</button>
            </div>
            
            
        </div>
    )
}

export default MainProduct