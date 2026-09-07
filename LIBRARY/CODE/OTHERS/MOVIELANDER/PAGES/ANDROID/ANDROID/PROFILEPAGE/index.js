export const MOVIELANDERANDROIDWEBPROFILEPAGE=()=>{
    BACKPAGEROUTE("MOVIELANDERANDROIDWEBPAGE");
    HEADERVIEWSPAGE((HOLDER)=>{
        LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE("",MOVIELANDERANDROIDWEBPAGE,"MOVIELANDERANDROIDWEBPAGE");
            });
        });
        ICONS(HOLDER,WHITENOTIFICATIONICON,WHITENOTIFICATIONICON,(DATA)=>{
            MARGINLEFT(DATA,"45%");
            CLICK(DATA,()=>{
                ROUTE(" ",MOVIELANDERANDROIDWEBNITIFICATIONSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
            });
        });
        RIGHTTEXT(HOLDER,"Profile",(DATA)=>{
            CLICK(DATA,()=>{
                BOTTOMVIEW("Full Profile",(DATATA)=>{

                });
            });
        });
    },(HOLDER)=>{
        GETUSERDATAAPP((Data)=>{
            console.log(Data)
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
                            CLICK(IMG,()=>{
                                BOTTOMVIEW("Avatar",(DATATA)=>{
                                    IMAGEVIEW(DATATA,Data.IMAGE||MOVIELANDERLOGO,(IMGS)=>{
                                        WIDTH(IMGS,"90%");
                                        HEIGHT(IMGS,"8%");
                                    });
                                });
                            })
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
                                CLICK(BTN,()=>{
                                    ROUTE(" ",MOVIELANDERANDROIDWEBEDITPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                                });
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
                                CLICK(BTN,()=>{
                                    ROUTE(" ",MOVIELANDERANDROIDWEBFOLLOWERSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                                })
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
            RIGHTICONTEXTVIEW(HOLDER,WHITEMOVIENIGHTICON,WHITEMOVIENIGHTICON,"Movie Night",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBMOVIENIGHTPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEGROUPICON,WHITEGROUPICON,"Community",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBCOMMUNITYPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEFIREICON,WHITEFIREICON,"Streak",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBSTREAKPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEHEARTICON,WHITEHEARTICON,"Archievements",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBARCHIEVEMENTSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITESUBSCRIPTIONICON,WHITESUBSCRIPTIONICON,"Premium",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBPREMIUMPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITELIBRARYICON,WHITELIBRARYICON,"Library",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBLIBRARYPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITESETTINGSICON,WHITESETTINGSICON,"Settings",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBSETTINGSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(HOLDER,()=>{});
            RIGHTICONTEXTVIEW(HOLDER,WHITEPHONEICON,BLACKPHONEICON,"Contact Us",(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE(" ",MOVIELANDERANDROIDWEBCONTACTUSPAGE,"MOVIELANDERANDROIDWEBPROFILEPAGE");
                });
            });
            BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
        });
    });     
};