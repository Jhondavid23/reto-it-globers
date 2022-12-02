import React from 'react'
import footerStyle from './footerStyle.module.css';


function Footer() {
    return (
        <>
            <div className={footerStyle.container}>
                <section className={footerStyle.section}>
                    <img src={require('../../images/logo2.png')} alt="logo" className={footerStyle.imgLogo} />
                </section>
                <section className={footerStyle.section}>
                    <div className={footerStyle.centerDiv}>
                        <p className={footerStyle.p}>PUFI RAIN</p>
                        <p className={footerStyle.p}>PUFI PUFF</p>
                        <p className={footerStyle.p}>PUFI CART</p>
                        <p className={footerStyle.p}>PUFI NAP</p>
                    </div>
                </section>
                <section className={footerStyle.section}>
                    <div className={footerStyle.centerDiv} >
                        <p className={footerStyle.p}>CONTACTO</p>
                        <p className={footerStyle.p}>AYUDA</p>
                        <p className={footerStyle.p}>CÓMO COMPRAR</p>
                        <p className={footerStyle.p}>TERMINOS Y CONDICIONES</p>
                    </div>

                </section>
                <section className={footerStyle.section}>
                    <div className={footerStyle.centerDiv}>
                        <p className={footerStyle.p}>COMPRA 100% SEGURA</p>
                        <div className={footerStyle.horizontalShop}>
                            <img src={require('../../images/qr.png')} alt="qr" className={footerStyle.brandLogo} />
                            <img src={require('../../images/escudo.png')} alt="escudo" className={footerStyle.brandLogo} />
                            <div className={footerStyle.divText}>
                                <p className={footerStyle.pSmall}>COMPRA CON LA GARANTÍA DE PUFI</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={footerStyle.lastSection}>
                    <div className={footerStyle.horizontalp}>

                        <p className={footerStyle.p}>SIGUENOS EN </p>
                        <img src={require('../../images/fb.png')} alt="fb-vector" className={footerStyle.brandLogo} />
                        <img src={require('../../images/ig.jpg')} alt="ig-vector" className={footerStyle.brandLogo} />
                        <img src={require('../../images/twitter.png')} alt="twitter-vector" className={footerStyle.brandLogo} />


                    </div>
                </section>
            </div>
            <div >
                <div className={footerStyle.lawsIformation}>
                    <p className={footerStyle.pLawInformation}>PUFI Copyright 2017 - Todos los derechos reservados</p>
                    <img src={require('../../images/brandlive.png')} alt="brandlive" className={footerStyle.brandEcommerce} />

                </div>

            </div>

        </>
    )
}

export default Footer