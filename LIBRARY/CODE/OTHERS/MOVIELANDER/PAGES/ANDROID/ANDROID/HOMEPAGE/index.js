export const MOVIELANDERANDROIDWEBPAGE=()=>{
    CLOUDSERVERDOWNLOAD("MOVIES");
    FOOTERVIEWSPAGE((HOLDER)=>{
        GETINDEX("MOVIES","MOVIES",(Data)=>{
            REDUX(Data,(Element)=>{
                TABLEVIEW(HOLDER,(DATA)=>{
                    IMAGEVIEW(DATA,Element.POSTER,(IMGS)=>{
                        WIDTH(IMGS,"");
                        HEIGHT(IMGS);
                        BORDERRADIUS(IMGS,"10px");
                    });
                });
                console.log(Element);
            });
        });
    },(HOLDER)=>{
        ICONTEXT(HOLDER,WHITEGRIDICON,BLACKGRIDICON,"Catergory",(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE(" ",MOVIELANDERANDROIDWEBCATERGORYPAGE,"MOVIELANDERANDROIDWEBPAGE");
            });
        });
        ICONTEXT(HOLDER,WHITEHEARTICON,WHITEHEARTICON,"Saved",()=>{

        });
        ICONTEXT(HOLDER,WHITEUSERICON,BLACKUSERICON,"Profile",(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE(" ",MOVIELANDERANDROIDWEBPROFILEPAGE,"MOVIELANDERANDROIDWEBPAGE");
            });
        });
    });
};