import { getGalleryData } from "./galeria/datosGaleria";
import { getHeroData } from "./hero/hero";
import {getTestimonios} from "./testimonios/testimonios"

//----------------Nav
import navData from "./global/nav";
//--------------- Productos 

import { getProductData } from "./productos/producto1";

export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    let testimoniosObject = {}

    switch(page){
        case '/gallery.html':
            pageObject = getGalleryData();
            break;
        case '/index.html':
            pageObject = getHeroData();
            testimoniosObject = getTestimonios();
            break;
        case '/productos/producto1.html':
            pageObject = getProductData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject,
        ...testimoniosObject
    }
}