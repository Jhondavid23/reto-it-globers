import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setIndex, setImage, setProducts } from '../../store/slice/products/index';
import { images } from '../../store/slice/products/index';
import MainProduct from '../Products/MainProduct';
import ContainerProducts from '../Products/ContainerProducts'
import { Allproducts } from '../../db/index';
import Newsletter from '../newsletter/Newsletter';
import Footer from '../footer/Footer';

function Home() {

    //redux connection
    const dispatch = useDispatch();
    const selectedIndex = useSelector((state) => state.products.selectedIndex);
    const selectedImage = useSelector((state) => state.products.selectedImage);
    // const products = useSelector((state)=> state.products.products)


    //ComponentDidMount
    React.useEffect(() => {
        dispatch(setProducts(Allproducts))
    }, [dispatch])

    //Change image
    const selectNewImage = (index, images, next = true) => {
        const condition = next ? index < images.length - 1 : index > 0;
        const nextIndex = next ? (condition ? index + 1 : 0) : condition ? index - 1 : images.length - 1;
        dispatch(setImage(images[nextIndex]));
        dispatch(setIndex(nextIndex));
    }
    //Buttons
    const previous = () => {
        selectNewImage(selectedIndex, images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, images);
    };
    return (
        <>
            <header>
                <MainProduct selectedImage={selectedImage} previous={previous} next={next} />
            </header>
            <article>
                <ContainerProducts />
            </article>
            <article>
                <Newsletter/>
            </article>
            <footer>
                <Footer/>
            </footer>

        </>
    )
}

export default Home


