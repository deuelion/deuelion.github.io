export const BUTTON=(HOLDER,TEXT,CALLBACk)=>{
    ELEMENTED(HOLDER,"button",(DATA)=>{
        MARGIN(DATA,"");
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"50px");
        BORDERRADIUS(DATA,"5px");
        OUTLINE(DATA);
        DISPLAY(DATA,TEXT||"Click");
        FONTSIZE(DATA,"80%");
        CALLBACk(DATA);
        TEXTCOMPOMODE(DATA);
    });
};