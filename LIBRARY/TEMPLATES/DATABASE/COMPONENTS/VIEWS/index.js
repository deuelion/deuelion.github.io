export const VIEWS=(HOLDER,CALLBACK)=>{
    DIV(HOLDER,(DATA)=>{
        OVERFLOW(DATA,"hidden");
        OVERFLOWY(DATA,"");
        DISPLAYED(DATA,"");
        CALLBACK(DATA);
    });
};