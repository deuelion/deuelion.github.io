export const MOVIELANDERANDROIDWEBPROFILEPAGE=()=>{
    HEADERVIEWSPAGE((HOLDER)=>{
        LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE("",MOVIELANDERANDROIDWEBPAGE,"MOVIELANDERANDROIDWEBPAGE");
            });
        });
        RIGHTTEXT(HOLDER,"Profile",()=>{

        });
    },(HOLDER)=>{
        HEADER(HOLDER,"PROFILE",()=>{

        });
    });
};