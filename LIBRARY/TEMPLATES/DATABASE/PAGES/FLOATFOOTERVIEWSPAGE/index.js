export const FLOATFOOTERVIEWSPAGE=(CALLBACK,CALLBACKED)=>{
    CLEAR("");
    VIEWS("",(HOLDER)=>{
        POSITION(HOLDER,"absolute");
        BOTTOM(HOLDER,"0px");
        HEIGHT(HOLDER,"auto");
        TOP(HOLDER,"0");
        CALLBACK(HOLDER);
    });
    FOOTER("",(HOLDER)=>{
        WIDTH(HOLDER,"95%");
        LEFT(HOLDER,"2%");
        BOTTOM(HOLDER,"10px");      
        BORDERRADIUS(HOLDER,"20px");
        CALLBACKED(HOLDER);
    });
};