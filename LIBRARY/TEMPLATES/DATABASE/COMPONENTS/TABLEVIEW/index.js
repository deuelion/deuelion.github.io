export const TABLEVIEW=(HOLDER,CALLBACK)=>{
    DIV(HOLDER,(DATA)=>{
        WIDTH(DATA,"45%");
        MARGIN(DATA,"2.5%");
        HEIGHT(DATA,"200px");
        OVERFLOW(DATA,"hidden");
        OVERFLOWX(DATA,"");
        DISPLAYED(DATA,"inline-table");
        BORDERRADIUS(DATA,"10px");
        CALLBACK(DATA);
    });
};