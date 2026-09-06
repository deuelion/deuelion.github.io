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
        GETUSERDATAAPP((Data)=>{
            console.log(Data)
            INLINEVIEW(HOLDER,(DATA)=>{
                    BACKGROUND(DATA,"red")
                IMAGEVIEW(DATA,MOVIELANDERLOGO,(IMG)=>{
                    WIDTH(IMG,"100px");
                    HEIGHT(IMG,"100px");
                    BORDERRADIUS(IMG,"50px");
                    MARGIN(IMG,"");
                    MARGINLEFT(IMG,"1%");
                });
                HEADER(DATA,"Name",()=>{

                });
            });
        });
    });     
};