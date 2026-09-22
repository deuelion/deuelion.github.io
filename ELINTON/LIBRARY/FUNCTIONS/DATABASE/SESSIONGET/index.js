export const SESSIONGET=(NAME,CALLBACK)=>{
    const DATA = sessionStorage.getItem(NAME);
    CALLBACK(DATA);
};