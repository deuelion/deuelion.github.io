export const HEADER=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h1",(DATA)=>{
        TEXTCOMPOMODE(DATA);
        WIDTH(DATA,"90%");
        DISPLAY(DATA,TEXT||"Your Text");
        MARGIN(DATA,"");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
    });
};