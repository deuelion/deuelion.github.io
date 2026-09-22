export const IMAGEVIEW=(HOLDER,SOURCE,CALLBACK)=>{
    VIEWS(HOLDER,(DATA)=>{
        COMPONENTMODE(DATA);
        OVERFLOW(DATA,"hidden");
        MARGIN(DATA,"5%");
        IMAGE(DATA,SOURCE,(DATATA)=>{
            CALLBACK(DATA);
        });
    });
};