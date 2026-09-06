export const HEADERSIX=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h6",(DATA)=>{
        TEXTCOMPOMODE(DATA);
        WIDTH(DATA,"90%");
        DISPLAY(DATA,TEXT||"Your Text");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
    });
};