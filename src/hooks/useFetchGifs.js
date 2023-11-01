import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getImages = async ()=>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setLoading(false);
    }

    useEffect(()=>{
    //    const newImages = getGifs(category).then(newImages =>setImages(newImages));
    getImages();
    },[]); //si se deja [], entonces la funcion solo se ejecuta una sola vez

    return{
        images,
        isLoading
    }

}
