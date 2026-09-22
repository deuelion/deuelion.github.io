export const DISPLAY=(HOLDER,DATA)=>{
    CONDITION(HOLDER,()=>{
        HOLDER.innerHTML=DATA;
    },()=>{
        BODIER.innerHTML=DATA;
    });
};