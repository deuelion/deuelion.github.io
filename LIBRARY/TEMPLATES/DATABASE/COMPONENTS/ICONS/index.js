export const ICONS=(HOLDER,LIGHTICON,DARKICON,CALLBACk)=>{
    CONDITION(sessionStorage.getItem("theme") === "light",()=>{
        IMAGE(HOLDER,DARKICON,(DATA)=>{
            WIDTH(DATA,"20px");
            HEIGHT(DATA,"20px");  
            MARGIN(DATA,"auto");
            CALLBACk(DATA);
        });
    },()=>{
        IMAGE(HOLDER,LIGHTICON,(DATA)=>{
            WIDTH(DATA,"20px");
            HEIGHT(DATA,"20px");  
            MARGIN(DATA,"auto");
            CALLBACk(DATA);
        });
    });
};