export const USERS=(NAME)=>{
    CONDITION(NAME,()=>{
        SESSIONSTORE("Access","True");
    },()=>{
        CONDITION(NAME === "Delete" ,()=>{
            SESSIONDELETE("Access");
        },()=>{
            SESSIONSTORE("Access","False");
        }); 
    });
};