import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setIndex, setImage } from '../../store/slice/products/index';
import { images } from '../../store/slice/products/index';
import MainProduct from '../Products/MainProduct';

function Home() {
    //redux connection
    const dispatch = useDispatch();
    const selectedIndex = useSelector((state) => state.products.selectedIndex);
    const selectedImage = useSelector((state) => state.products.selectedImage);

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
        <div>
           <div>
            <MainProduct selectedImage={selectedImage} previous={previous} next={next}/>
           </div>
            
        </div>
    )
}

export default Home


