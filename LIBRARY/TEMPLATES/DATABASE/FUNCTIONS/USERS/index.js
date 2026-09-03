export const USERS=(NAME)=>{
    CONDITION(NAME === "True" ,()=>{
        SESSIONSTORE("Access","True");
    },()=>{
        CONDITION(NAME === "False" ,()=>{
          SESSIONSTORE("Access","False");  
        },()=>{
            SESSIONDELETE("Access");
        }); 
    });
};