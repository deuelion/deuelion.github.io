export const TABLEVIEW=(HOLDER,CALLBACK)=>{
    DIV(HOLDER,(DATA)=>{
        WIDTH(DATA,"45%");
        MARGINLEFT(DATA,"2%");
        MARGINRIGHT(DATA,"3%");
        HEIGHT(DATA,"200px");
        OVERFLOW(DATA,"hidden");
        OVERFLOWX(DATA,"");
        DISPLAYED(DATA,"inline-table");
        BORDERRADIUS(DATA,"10px");
        CALLBACK(DATA);
    });
};