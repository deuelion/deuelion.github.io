export const NOLOCALSTORE=(NAME,CALLBACK)=>{
    CHECK(!localStorage.getItem(NAME),()=>{
        CALLBACK();
    });
};