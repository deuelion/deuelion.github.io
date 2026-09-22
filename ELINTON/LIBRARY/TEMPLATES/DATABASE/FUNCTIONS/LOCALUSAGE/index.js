export const LOCALUSAGE=(NAME,CALLBACK)=>{
    CHECK(localStorage.getItem(NAME),()=>{
        CALLBACK();
    });
};