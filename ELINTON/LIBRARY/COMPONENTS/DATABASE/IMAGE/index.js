export const IMAGE=(HOLDER,SOURCE,CALLBACk)=>{
    ELEMENTED(HOLDER,"img",(DATA)=>{
        WIDTH(DATA,"");
        HEIGHT(DATA,"");
        SOURCED(DATA,SOURCE);
        CALLBACk(DATA);
    });
};