import { ELITEROBUSTONTOLOGYPROJECT } from "./OTHERS/ELITEROBUSTONTOLOGY/Connection.js";
let DEFAULTS=ELITEROBUSTONTOLOGYPROJECT;
export const FEATURES=()=>{
    const TITLE = document.title;
    switch (TITLE) {
        case "Elite Robust Ontology":ELITEROBUSTONTOLOGYPROJECT();
            break;
        default:DEFAULTS();
            break;
    };  
};