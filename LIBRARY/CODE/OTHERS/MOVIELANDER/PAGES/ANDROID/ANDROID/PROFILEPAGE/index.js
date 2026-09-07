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
            VIEWS(HOLDER,(DATA)=>{
                WIDTH(DATA,"95%");
                HEIGHT(DATA,"200px");
                VIEWS(DATA,(DATATA)=>{
                    HEIGHT(DATATA,"150px");
                    INLINEVIEW(DATATA,(HOLDERS)=>{
                        IMAGEVIEW(HOLDERS,MOVIELANDERLOGO,(IMG)=>{
                            BORDERRADIUS(IMG,"10px");
                            WIDTH(IMG,"130px");
                            HEIGHT(IMG,"93px");
                            MARGIN(IMG,"");
                            MARGINTOP(IMG,"2%");
                            MARGINLEFT(IMG,"2%");
                        });
                        INLINEVIEW(HOLDERS,(HOLDERES)=>{
                            ABSOLUTE(HOLDERES);
                            TOP(HOLDERES,"55px");
                            LEFT(HOLDERES,"145px");
                            WIDTH(HOLDERES,"50px");
                            HEIGHT(HOLDERES,"40px");
                            BORDERRADIUS(HOLDERES,"10px");
                            BUTTON(HOLDERES,"Edit",(BTN)=>{
                                BACKGROUND(BTN,"forestgreen");
                                WIDTH(BTN,"50px");
                                HEIGHT(BTN,"40px");
                            });
                        })
                        INLINEVIEW(HOLDERS,(HOLDERES)=>{
                            ABSOLUTE(HOLDERES);
                            TOP(HOLDERES,"50px");
                            RIGHT(HOLDERES,"60px");
                            WIDTH(HOLDERES,"100px");
                            HEIGHT(HOLDERES,"45px");
                            BUTTON(HOLDERES,"Followers:"+"0",(BTN)=>{
                                BACKGROUND(BTN,"transparent");
                                WIDTH(BTN,"100px");
                            });
                        })
                        HEADER(HOLDERS,Data.FIRSTNAME,(DATATE)=>{
                            MARGINTOP(DATATE,"5%");
                            FONTSIZE(DATATA,"25px");
                            MARGINRIGHT(DATATA,"1%");
                        });

                    });

                });
                VIEWS(DATA,(DATATA)=>{
                    HEIGHT(DATATA,"50px");
                    INLINEFLEX(DATATA);
                    BUTTON(DATATA,"Watched : "+"0",(BTN)=>{
                        MARGIN(BTN,"");
                        BACKGROUND(BTN,"transparent");
                        WIDTH(BTN,"100px");
                    });
                    BUTTON(DATATA,"Hours : "+"0",(BTN)=>{
                        MARGIN(BTN,"");
                        BACKGROUND(BTN,"transparent");
                        WIDTH(BTN,"100px");
                    });
                    BUTTON(DATATA,"Premium : "+"0",(BTN)=>{
                        MARGIN(BTN,"");
                        BACKGROUND(BTN,"transparent");
                        WIDTH(BTN,"100px");
                    });
                });
            });
            BREAK(HOLDER,()=>{});
            HEADER(HOLDER,"PREFERENCES",()=>{});
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEMOVIENIGHTICON,WHITEMOVIENIGHTICON,"Movie Night",()=>{

            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEGROUPICON,WHITEGROUPICON,"Community",()=>{

            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEFIREICON,WHITEFIREICON,"Streak",()=>{

            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEHEARTICON,WHITEHEARTICON,"Archievements",()=>{

            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITESUBSCRIPTIONICON,WHITESUBSCRIPTIONICON,"Premium",()=>{

            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITELIBRARYICON,WHITELIBRARYICON,"Library",()=>{

            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITESETTINGSICON,WHITESETTINGSICON,"Settings",()=>{

            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEPHONEICON,BLACKPHONEICON,"Contact Us",()=>{

            });
            BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
        });
    });     
};