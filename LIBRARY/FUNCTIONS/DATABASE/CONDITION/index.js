export const CONDITION=(TERM,CALLBACK,CALBACKTWO)=>{
    if (TERM) {
        CALLBACK();
    } else {
        CALBACKTWO();
    };
};