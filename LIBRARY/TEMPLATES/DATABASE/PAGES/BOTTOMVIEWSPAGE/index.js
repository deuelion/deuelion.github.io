export const BOTTOMVIEWSPAGE=(CALLBACK)=>{
    VIEWS("",(DATATA)=>{
        INLINEFLEX(DATATA);
        ABSOLUTE(DATATA);
        COMPONENTMODE(DATATA);
        WIDTH(DATATA,"80%");
        HEIGHT(DATATA,"50%");
        BORDERRADIUS(DATATA,"20px");
        LEFT(DATATA,"10%");
        TOP(DATATA,"50px");
        BOTTOM(DATATA,"0px");
        CALLBACK(DATATA);
    });
};