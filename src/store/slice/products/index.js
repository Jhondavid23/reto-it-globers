import {createSlice} from '@reduxjs/toolkit';

export const images = ["image_1.jpg", "image_2.jpg", "image_3.jpg"];

const initialState = {
    selectedIndex : 0,
    selectedImage : images[0],
    products : []
}

export const productSlice = createSlice({
    name : "products",
    initialState,
    reducers :{
        setIndex : (state,action)=>{
            state.selectedIndex = action.payload
        },
        setImage : (state, action)=>{
            state.selectedImage = action.payload
        },
        setProducts : (state, action)=>{
            state.products = action.payload
        }

    }

})

export const {setIndex, setImage, setProducts} = productSlice.actions

export default productSlice.reducer