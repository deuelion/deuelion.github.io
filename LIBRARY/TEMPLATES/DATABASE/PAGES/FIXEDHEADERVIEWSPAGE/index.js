export const FIXEDHEADERVIEWSPAGE=(CALLBACKED,CALLBACK)=>{
    CLEAR("");
    HEAD("",(HOLDER)=>{
        CALLBACKED(HOLDER);
    });
    VIEWS("",(HOLDER)=>{
        POSITION(HOLDER,"absolute");
        OVERFLOW(HOLDER,"hidden");
        FIXED(HOLDER);
        BOTTOM(HOLDER,"0px");
        HEIGHT(HOLDER,"auto");
        TOP(HOLDER,"50px");
        CALLBACK(HOLDER);
    });
};