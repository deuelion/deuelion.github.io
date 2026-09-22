export const REPEATER=(TIME,CALLBACK)=>{
    setInterval(() => {
        CALLBACK();
    }, TIME||500);
};