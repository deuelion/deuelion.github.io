export const HEADERVIEWSPAGE=(CALLBACKED,CALLBACK)=>{
    CLEAR("");
    HEAD("",(HOLDER)=>{
        CALLBACKED(HOLDER);
    });
    VIEWS("",(HOLDER)=>{
        POSITION(HOLDER,"absolute");
        BOTTOM(HOLDER,"0px");
        HEIGHT(HOLDER,"auto");
        TOP(HOLDER,"60px");
        CALLBACK(HOLDER);
    });
};