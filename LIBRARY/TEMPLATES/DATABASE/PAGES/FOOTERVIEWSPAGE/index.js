export const FOOTERVIEWSPAGE=(CALLBACK,CALLBACKED)=>{
    CLEAR("");
    VIEWS("",(HOLDER)=>{
        POSITION(HOLDER,"absolute");
        BOTTOM(HOLDER,"50px");
        HEIGHT(HOLDER,"auto");
        TOP(HOLDER,"0");
        CALLBACK(HOLDER);
    });
    FOOTER("",(HOLDER)=>{
        CALLBACKED(HOLDER);
    });
};