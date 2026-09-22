export const TEXTCOMPOMODE=(HOLDER)=>{
    CONDITION(sessionStorage.getItem("theme") === "light",()=>{
        COLOR(HOLDER,"#000000");
    },()=>{
        COLOR(HOLDER,"#FFFFFF");
    });
};