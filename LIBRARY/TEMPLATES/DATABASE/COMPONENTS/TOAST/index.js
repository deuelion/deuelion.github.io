export const TOAST=(HOLDER,TIME,MESSAGE,CALLBACK)=>{     
    DIV(HOLDER,(DATA)=>{
        ABSOLUTE(DATA);
        BACKGROUND(DATA,"gray");
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"50px");
        BOTTOM(DATA,"50px");
        LEFT(DATA,"5%");
        BORDERRADIUS(DATA,"10px");
        INLINEFLEX(DATA);
        HEADER(DATA,MESSAGE||"Your Message",()=>{});
        CONDITION(TIME,()=>{
            HIDER(2000,()=>{
                DISPLAYED(DATA,"none");
            });
        },()=>{
            CALLBACK(DATA);
        });
    });
};