export const USERS=(NAME)=>{
    CONDITION(NAME,()=>{
        SESSIONSTORE("Access","True");
    },()=>{
        SESSIONSTORE("Access","False");
    });
};