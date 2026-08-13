export const FOOTER=(HOLDER,CALLBACk)=>{
    ELEMENTED(HOLDER,"footer",(DATA)=>{
        POSITION(DATA,"absolute");
        COMPONENTMODE(DATA);
        BOTTOM(DATA,"0");
        LEFT(DATA,"");
        WIDTH(DATA,"100%");
        HEIGHT(DATA,"50px");
        OVERFLOWY(DATA,"hidden");
        DISPLAYED(DATA,"inline-flex");
        CALLBACk(DATA);
    });
};