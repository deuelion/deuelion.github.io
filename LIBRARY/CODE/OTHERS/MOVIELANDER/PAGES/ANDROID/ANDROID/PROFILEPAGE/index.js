export const MOVIELANDERANDROIDWEBPROFILEPAGE=()=>{
    GETINDEX("USERDATA","USERDATA",(Data)=>{
        HEADERVIEWSPAGE((HOLDER)=>{
            LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE("",MOVIELANDERANDROIDWEBPAGE,"MOVIELANDERANDROIDWEBPAGE");
                });
            });
            RIGHTTEXT(HOLDER,"Profile",()=>{

            });
        },(HOLDER)=>{
            IMAGEVIEW(HOLDER,MOVIELANDERLOGO,(DATA)=>{
                WIDTH(DATA,"90%");
                HEIGHT(DATA,"40%");
                BORDERRADIUS(DATA,"10px");
            });
            INLINEVIEW(HOLDER,(DATA)=>{
                BUTTON(DATA,"Update",(DATATA)=>{
                    WIDTH(DATATA,"40%");
                    HEIGHT(DATATA,"45px");
                    BACKGROUND(DATATA,"forestgreen");
                    CLICK(DATATA,()=>{
                        BOTTOMVIEW("Profile Updates",()=>{

                        });
                    });
                });
                BUTTON(DATA,"Log Out",(DATATA)=>{
                    WIDTH(DATATA,"40%");
                    HEIGHT(DATATA,"45px");
                    BACKGROUND(DATATA,"brown");
                    CLICK(DATATA,()=>{
                        LOCALDELETE("User");RELOAD();
                    });
                });
            });
            INLINEVIEW(HOLDER,(DATA)=>{
                LEFTICON(DATA,WHITEUSERICON,BLACKUSERICON,(DATATA)=>{
                    MARGINLEFT(DATATA,"10%");
                });
                RIGHTTEXT(DATA,"Name",(DATATA)=>{
                    MARGINRIGHT(DATATA,"10%");
                });
            });
            INLINEVIEW(HOLDER,(DATA)=>{
                LEFTICON(DATA,WHITEGMAILICON,WHITEGMAILICON,(DATATA)=>{
                    MARGINLEFT(DATATA,"10%");
                });
                RIGHTTEXT(DATA,"Email",(DATATA)=>{
                    MARGINRIGHT(DATATA,"10%");
                });
            });
            INLINEVIEW(HOLDER,(DATA)=>{
                LEFTICON(DATA,WHITELOCATIONICON,BLACKLOCATIONICON,(DATATA)=>{
                    MARGINLEFT(DATATA,"10%");
                });
                LOCALGET("TIMEZONE",(Datate)=>{
                    RIGHTTEXT(DATA,Datate,(DATATA)=>{
                        MARGINRIGHT(DATATA,"10%");
                    });
                });
            });
            HEADER(HOLDER,"PREFERENCES",(DATA)=>{
                FONTSIZE(DATA,"25px");
            });
            BREAK(HOLDER,()=>{});
            BUTTON(HOLDER,"Settings",(DATA)=>{
                BACKGROUND(DATA,"teal");
                CLICK(DATA,()=>{
                    BOTTOMVIEW("App Settings",()=>{

                    });
                });
            });
            BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
            BUTTON(HOLDER,"Policies",(DATA)=>{
                BACKGROUND(DATA,"teal");
                CLICK(DATA,()=>{
                    BOTTOMVIEW("App Policies",()=>{

                    });
                });
            });
            BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
            BUTTON(HOLDER,"Delete Account",(DATA)=>{
                BACKGROUND(DATA,"red");
                CLICK(DATA,()=>{
                    BOTTOMVIEW("Delete Account",()=>{

                    });
                });
            });
            BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
        });
    });
};