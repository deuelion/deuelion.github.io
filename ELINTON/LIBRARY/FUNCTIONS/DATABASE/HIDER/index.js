export const HIDER=(TIME,CALLBACK)=>{
    setTimeout(() => {
        CALLBACK();
    }, TIME||500);
};