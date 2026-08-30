export const MOVIELANDERANDROIDWEBCATERGORYPAGE=()=>{
    HEADERVIEWSPAGE((HOLDER)=>{
        LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE("",MOVIELANDERANDROIDWEBPAGE,"MOVIELANDERANDROIDWEBPAGE");
            });
        });
        RIGHTTEXT(HOLDER,"Catergory",()=>{

        });
    },(HOLDER)=>{
        HEADER(HOLDER,"CATERGORY",()=>{

        });
    });
};