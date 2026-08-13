export const COMPOMODE=(HOLDER)=>{
    CONDITION(sessionStorage.getItem("theme") === "light",()=>{
        BACKGROUND(HOLDER,"#f9f5f590");
    },()=>{
        BACKGROUND(HOLDER,"#29282890");
    });
};