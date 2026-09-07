export const MOVIELANDERANDROIDWEBPROFILEPAGE=()=>{
    BACKPAGEROUTE("MOVIELANDERANDROIDWEBPAGE");
    FLOATFOOTERVIEWSPAGE((HOLDER)=>{
        INLINEVIEW(HOLDER,(DATA)=>{
            HEIGHT(DATA,"50px");
            LEFTICON(DATA,WHITEADDICON,WHITEADDICON,(DATATA)=>{
                
            });
            ICONS(DATA,WHITENOTIFICATIONICON,WHITENOTIFICATIONICON,(DATATA)=>{
                MARGINLEFT(DATATA,"45%");
                CLICK(DATATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBNITIFICATIONSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            RIGHTTEXT(DATA,"Profile",(DATATA)=>{
                CLICK(DATATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBFULLPROFILESPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
        });
        VIEWS(HOLDER,(DATATA)=>{
            OVERFLOW(DATATA,"hidden");
            WIDTH(DATATA,"95%");
            HEIGHT(DATATA,"200px");
            VIEWS(DATATA,(DATA)=>{
                HEIGHT(DATA,"152px");
                BACKGROUND(DATA,"red");
            });
            INLINEVIEW(DATATA,(DATA)=>{
                HEIGHT(DATA,"50px");
                HEADER(DATA,"Watched : 0 ",()=>{});
                HEADER(DATA,"Hours : 0 ",()=>{});
                HEADER(DATA,"Premium : 0 ",()=>{});
            });
        });
        HEADER(HOLDER,"PREFERENCES",(DATA)=>{
            FONTSIZE(DATA,"25px");
        });
        VIEWS(HOLDER,(DATATA)=>{
            WIDTH(DATATA,"95%");
            HEIGHT(DATATA,"auto");
            RIGHTICONTEXTVIEW(DATATA,WHITEMOVIENIGHTICON,WHITEMOVIENIGHTICON,"Movie Night",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBMOVIENIGHTPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(DATATA,()=>{});
            RIGHTICONTEXTVIEW(DATATA,WHITEGROUPICON,WHITEGROUPICON,"Community",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBCOMMUNITYPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(DATATA,()=>{});
            RIGHTICONTEXTVIEW(DATATA,WHITEFIREICON,WHITEFIREICON,"Streak",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBSTREAKPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(DATATA,()=>{});
            RIGHTICONTEXTVIEW(DATATA,WHITEHEARTICON,WHITEHEARTICON,"Archievements",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBARCHIEVEMENTSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(DATATA,()=>{});
            RIGHTICONTEXTVIEW(DATATA,WHITESUBSCRIPTIONICON,WHITESUBSCRIPTIONICON,"Premium",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBPREMIUMPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(DATATA,()=>{});
            RIGHTICONTEXTVIEW(DATATA,WHITELIBRARYICON,WHITELIBRARYICON,"Library",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBLIBRARYPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(DATATA,()=>{});
            RIGHTICONTEXTVIEW(DATATA,WHITESETTINGSICON,WHITESETTINGSICON,"Settings",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBSETTINGSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(DATATA,()=>{});
            RIGHTICONTEXTVIEW(DATATA,WHITEPHONEICON,BLACKPHONEICON,"Contact Us",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBCONTACTUSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(DATATA,()=>{});BREAK(DATATA,()=>{});BREAK(DATATA,()=>{});BREAK(DATATA,()=>{});BREAK(DATATA,()=>{});
        });
    },(HOLDER)=>{
        ICONTEXT(HOLDER,WHITEHOMEICON,BLACKHOMEICON,"Home",(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE(" ",MOVIELANDERANDROIDWEBPAGE,"MOVIELANDERANDROIDWEBPAGE");
            });
        });
        ICONTEXT(HOLDER,WHITEGROUPICON,WHITEGROUPICON,"People",(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE(" ",MOVIELANDERANDROIDWEBPEOPLEPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
            });
        });
        ICONTEXT(HOLDER,WHITECHATICON,WHITECHATICON,"Chats",(DATA)=>{
            
            CLICK(DATA,()=>{
               ROUTE(" ",MOVIELANDERANDROIDWEBCHATPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
            });
        });
    });
};