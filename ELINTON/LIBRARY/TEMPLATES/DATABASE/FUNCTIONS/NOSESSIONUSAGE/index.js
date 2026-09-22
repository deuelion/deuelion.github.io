export const NOSESSIONSTORE=(NAME,CALLBACK)=>{
    CHECK(!sessionStorage.getItem(NAME),()=>{
        CALLBACK();
    });
};