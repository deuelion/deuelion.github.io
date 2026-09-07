export const RIGHTVIEW=(HOLDER,CALLBACK)=>{
    VIEWS(HOLDER,(DATATE)=>{
        WIDTH(DATATE,"49%");
        HEIGHT(DATATE,"100%");
        TOP(DATATE,"0");
        MARGINLEFT(DATATE,"0");
        CALLBACK(DATATE);
    });
};