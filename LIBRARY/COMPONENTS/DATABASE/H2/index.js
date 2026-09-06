export const HEADERTWO=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h2",(DATA)=>{
        TEXTCOMPOMODE(DATA);
        WIDTH(DATA,"90%");
        DISPLAY(DATA,TEXT||"Your Text");
        MARGIN(DATA,"");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
    });
};