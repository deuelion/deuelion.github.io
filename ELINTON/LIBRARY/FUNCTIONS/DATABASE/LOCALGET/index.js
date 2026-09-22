export const LOCALGET=(NAME,CALLBACK)=>{
    const DATA = localStorage.getItem(NAME);
    CALLBACK(DATA);
};