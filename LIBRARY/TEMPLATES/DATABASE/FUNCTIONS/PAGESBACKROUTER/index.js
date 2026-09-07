export const BACKPAGEROUTE=(NAME)=>{
    HIDER(1000,()=>{
        SESSIONSTORE("PreviousPage",NAME);
    });  
};