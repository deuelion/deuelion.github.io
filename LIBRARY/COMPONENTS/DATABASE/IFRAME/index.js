export const IFRAME=(HOLDER,SOURCE,CALLBACK)=>{
    ELEMENTED(HOLDER,"iframe",(DATA)=>{
        WIDTH(DATA,"");
        HEIGHT(DATA,"");
        SOURCED(DATA,SOURCE);
        CALLBACK(DATA);
    });
};