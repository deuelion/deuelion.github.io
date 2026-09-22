export const SHYLANSIRAJANDROIDMOBILEVIEWCLOTHEPAGE=()=>{
    DEJSONIFICATION(sessionStorage.getItem("StoredData"),(SDATA)=>{
        SESSIONGET("Amount",(NN)=>{
            CHECK(!NN,()=>{
                SESSIONSTORE("Amount",SDATA.AMOUNT);
            });
        });
        HEADERVIEWSPAGE((HOLDER)=>{
            LEFTICON(HOLDER,WHITEBACKICON,BLACKBACKICON,(DATA)=>{
                CLICK(DATA,()=>{
                    ROUTE("",SHYLANSIRAJANDROIDHOMEPAGE,SHYLANSIRAJANDROIDHOMEPAGE);
                });
            });
            RIGHTTEXT(HOLDER,SDATA.NAME,(DATA)=>{
                
            });
        },(HOLDER)=>{
            IMAGEVIEW(HOLDER,GOOGLEDRIVETHUMBNAILAPI+SDATA.FILELINK,(IDATA)=>{
                HEIGHT(IDATA,"300px");
                WIDTH(IDATA,"95%");
                MARGINLEFT(IDATA,"1%");
            });
            HEADER(HOLDER,SDATA.NAME,()=>{

            });
            LEFTTEXT(HOLDER,SDATA.DETAILS||"No ITEM DESCRIPTION ADDED AVAILABLE.",()=>{

            });
            VIEWS(HOLDER,(DDATA)=>{
                HEIGHT(DDATA,"auto");
                INLINEVIEW(DDATA,(PDATA)=>{
                    HEIGHT(PDATA,"50px");
                    HEADER(PDATA,"Price",()=>{});
                    SESSIONGET("Amount",(NDATA)=>{
                        HEADER(PDATA,NDATA,(PRICEDISPLAY)=>{
                        });
                    });
                });
                INLINEVIEW(DDATA,(PADDATA)=>{
                    HEIGHT(PADDATA,"50px");
                    BUTTON(PADDATA,"-",(DBTN)=>{
                        BACKGROUND(DBTN,"FORESTGREEN");
                        WIDTH(DBTN,"40%");
                        HEIGHT(DBTN,"40px");
                        CLICK(DBTN,()=>{
                            SESSIONGET("Amount",(ND)=>{
                                CONDITION(Number(ND) === SDATA.AMOUNT,()=>{
                                    SESSIONSTORE("Amount",SDATA.AMOUNT);
                                    SHYLANSIRAJANDROIDMOBILEVIEWCLOTHEPAGE();
                                },()=>{
                                    SESSIONSTORE("Amount",Number(ND)-SDATA.AMOUNT);
                                    SHYLANSIRAJANDROIDMOBILEVIEWCLOTHEPAGE();
                                });
                            });
                        });
                    });
                    BUTTON(PADDATA,"+",(DBTN)=>{
                        BACKGROUND(DBTN,"FORESTGREEN");
                        WIDTH(DBTN,"40%");
                        HEIGHT(DBTN,"40px");
                        CLICK(DBTN,()=>{
                            SESSIONGET("Amount",(ND)=>{
                                SESSIONSTORE("Amount",Number(ND)+SDATA.AMOUNT);
                                SHYLANSIRAJANDROIDMOBILEVIEWCLOTHEPAGE();
                            });
                        });
                    });
                });
                BUTTON(DDATA,"BUY",(DBTN)=>{
                    BACKGROUND(DBTN,"ORANGE");
                    WIDTH(DBTN,"90%");
                    HEIGHT(DBTN,"50px");
                    CLICK(DBTN,()=>{
                        LOCALGET("User",(LDATA)=>{
                            TOASTEDMESSAGE(LDATA !== null,"Login To Purchase",()=>{
    
                            });
                        });
                    });
                });
            });
        });
    });
};