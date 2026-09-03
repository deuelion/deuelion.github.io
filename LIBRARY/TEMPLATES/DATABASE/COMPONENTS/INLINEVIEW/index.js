export const INLINEVIEW=(HOLDER,CALLBACK)=>{
    DIV(HOLDER,(DATA)=>{
        OVERFLOW(DATA,"hidden");
        OVERFLOWX(DATA,"");
        DISPLAYED(DATA,"inline-flex");
        CALLBACK(DATA);
    });
};