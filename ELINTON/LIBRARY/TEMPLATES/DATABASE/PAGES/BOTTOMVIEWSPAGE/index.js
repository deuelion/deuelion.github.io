export const BOTTOMVIEWSPAGE=(CALLBACK)=>{
    VIEWS("",(DATATA)=>{
        INLINEFLEX(DATATA);
        ABSOLUTE(DATATA);
        COMPONENTMODE(DATATA);
        WIDTH(DATATA,"90%");
        HEIGHT(DATATA,"60%");
        BORDERRADIUS(DATATA,"20px");
        LEFT(DATATA,"5%");
        TOP(DATATA,"50px");
        BOTTOM(DATATA,"0px");
        CALLBACK(DATATA);
    });
};