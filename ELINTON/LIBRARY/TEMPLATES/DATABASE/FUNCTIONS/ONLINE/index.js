export const ONLINE=(CALLBACK)=>{
    CHECK(navigator.onLine,()=>{
        CALLBACK();
    });
};