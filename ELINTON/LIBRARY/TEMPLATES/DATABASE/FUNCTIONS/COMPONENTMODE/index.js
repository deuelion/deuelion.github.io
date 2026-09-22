export const COMPONENTMODE=(HOLDER)=>{
    CONDITION(sessionStorage.getItem("theme") === "light",()=>{
        BACKGROUND(HOLDER,"#ffffff");
    },()=>{
        BACKGROUND(HOLDER,"#121212");
    });
};