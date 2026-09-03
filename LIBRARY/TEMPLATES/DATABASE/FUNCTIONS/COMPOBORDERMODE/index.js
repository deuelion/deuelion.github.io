export const COMPOBORDERMODE=(HOLDER)=>{
    CONDITION(sessionStorage.getItem("theme") === "light",()=>{
        BORDER(HOLDER,"#26252550");
    },()=>{
        BORDER(HOLDER,"#aca9a950");
    });
};