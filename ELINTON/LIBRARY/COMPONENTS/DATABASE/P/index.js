export const PARAGRAPH=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"h1",(DATA)=>{
        TEXTCOMPOMODE(DATA);
        DISPLAY(DATA,TEXT||"Your Text");
        WIDTH(DATA,"90%");
        FONTSIZE(DATA,"95%");
        CALLBACk(DATA);
    });
};