export const SESSIONUSAGE=(NAME,CALLBACK)=>{
    CHECK(sessionStorage.getItem(NAME),()=>{
        CALLBACK();
    });
};