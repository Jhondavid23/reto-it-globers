import React from 'react'
import navbar from "./navbar.module.css";

function Navbar() {
    return (
        <nav className={navbar.container}>
            <figure>
                <img src={require('../../images/logo.png')} alt="puff_logo" className={navbar.logo} />

            </figure>
            <div className={navbar.section}>
                <div className={navbar.sectionDiv}>
                    <h5 className={navbar.p}>PUFI PUFF</h5>
                </div>
                <div className={navbar.sectionDiv}>
                    <h5 className={navbar.p}>PUFI RAIN</h5>
                </div>
                <div className={navbar.sectionDiv}>
                    <h5 className={navbar.p}>PUFI CART</h5>
                </div>
                <div className={navbar.sectionDivCorner}>
                    <h5 className={navbar.p}>PUFI NAP</h5>
                </div>
            </div>
            <div className={navbar.login}>
                <div className={navbar.sectionDiv}>
                    <p className={navbar.pSmall}>MI CUENTA</p>
                </div>
                <div className={navbar.sectionDivCorner}>
                    <p className={navbar.pSmall}>MI COMPRA</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar