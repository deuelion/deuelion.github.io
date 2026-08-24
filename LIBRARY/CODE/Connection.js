import { ELITEROBUSTONTOLOGYPROJECT } from "./OTHERS/ELITEROBUSTONTOLOGY/Connection.js";
import { EROXIANPROJECT } from "./OTHERS/EROXIAN/Connection.js";
import { NOORPROJECT } from "./OTHERS/NOOR/Connection.js";
import { SHYLANSIRAJPROJECT } from "./OTHERS/SHYLANSIRAJ/Connection.js";
let DEFAULTS=ELITEROBUSTONTOLOGYPROJECT;
export const FEATURES=()=>{
    const TITLE = document.title;
    switch (TITLE) {
        case "Noor_Charity_And_Orphanage_Organisation":NOORPROJECT();
            break;
        case "ShyLanSirajFashionHub":SHYLANSIRAJPROJECT();
            break;
        case "Eroxians":EROXIANPROJECT();
            break;
        case "Elite Robust Ontology":ELITEROBUSTONTOLOGYPROJECT();
            break;
        default:DEFAULTS();
            break;
    };  
};