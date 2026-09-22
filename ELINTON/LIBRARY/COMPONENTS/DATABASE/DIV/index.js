export const DIV=(HOLDER,CALLBACk)=>{
    ELEMENTED(HOLDER,"div",(DATA)=>{
        BACKGROUND(DATA,"transparent");
        MARGIN(DATA,"");
        WIDTH(DATA,"100%");
        HEIGHT(DATA,"100px");
        DISPLAYED(DATA,"block");
        DISPLAY(DATA,"");
        CALLBACk(DATA);
    });
};