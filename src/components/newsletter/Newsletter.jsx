import React from 'react'
import ContactForm from '../contactForm/ContactForm';
import newsletterStyle from './newsletter.module.css';

function Newsletter() {

    const listOfPhotos = ["https://thumbs.dreamstime.com/z/gente-bajo-los-paraguas-2728452.jpg", "https://e.rpp-noticias.io/normal/2018/05/08/262526_606534.jpg", "https://www.happers.es/server/Portal_0010674/img/products/happers-to-go-azul_1726265_49420639_xl.jpg", "https://www.happers.es/server/Portal_0010689/img/galeria/carrusel_happers_to_go_s7_30455.jpg", "https://www.happers.es/server/Portal_0010674/img/categories/categoria_listado_pera_img3_106570.jpg", "https://www.livemorezone.com/wp-content/uploads/young-men-relaxing-on-bean-bag-chair-on-white-background-stock-photo.jpg"]

    return (
        <div className={newsletterStyle.container} >
            <div className={newsletterStyle.secondContainer}>
                <article className={newsletterStyle.articleTitle}>
                    <p className={newsletterStyle.articleTitleP}>INSTAGRAM</p>
                    <h2 className={newsletterStyle.articelHashtag}>#ESPUFI</h2>
                </article>
                <article >
                    <div className={newsletterStyle.articleImages}>
                        {listOfPhotos.map((p) => {
                            return <div className={newsletterStyle.divImages}><img src={p} alt="logo" className={newsletterStyle.images} /></div>
                        })}
                    </div>

                </article>
                <article className={newsletterStyle.articleForm}>
                    <section>
                        <p className={newsletterStyle.articleTitleP} >NEWSLETTER</p>
                        <h2 className={newsletterStyle.subcribe}>SUSCRIBETE</h2>
                        <p className={newsletterStyle.articleTitleP}>Y enterate de todas las novedades</p>
                    </section>
                    <section className={newsletterStyle.sectionForm}>
                        <ContactForm />
                    </section>

                </article>
            </div>
        </div>
    )
}

export default Newsletter