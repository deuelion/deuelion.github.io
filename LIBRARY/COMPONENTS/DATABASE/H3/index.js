export const HEADERTHREE=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h3",(DATA)=>{
        TEXTCOMPOMODE(DATA);
        WIDTH(DATA,"90%");
        DISPLAY(DATA,TEXT||"Your Text");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
    });
};