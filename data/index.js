import { getGalleryData } from "./galeria/datosGaleria";
import { getHeroData } from "./hero/hero";

//--------------- Productos 

import { getProductData } from "./productos/producto1";

export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {};
    let pageObject = {}
    switch(page){
        case '/gallery.html':
            pageObject = getGalleryData();
            break;
        case '/index.html':
            pageObject = getHeroData();
            break;
        case '/productos/producto1.html':
            pageObject = getProductData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}