export const SHYLANSIRAJANDROIDHOMEPAGE=()=>{
    SESSIONDELETE("Amount");
    FOOTERVIEWSPAGE((HOLDER)=>{
        LOADINGICON(HOLDER,(LOAD)=>{
            GETINDEX("CLOTHES","CLOTHES",(SDATA)=>{
                DISPLAYED(LOAD,"none");
                REDUX(SDATA,(Element)=>{
                    TABLEVIEW(HOLDER,(HOLDEE)=>{
                        BACKGROUND(HOLDEE,"gray");
                        VIEWS(HOLDEE,(DATA)=>{
                            HEIGHT(DATA,"50px");
                            BREAK(DATA,()=>{})
                            LEFTTEXT(DATA, "UGX : "+Element.AMOUNT,()=>{});
                        });
                        IMAGE(HOLDEE,GOOGLEDRIVETHUMBNAILAPI+Element.FILELINK||SHYLANSIRAJLOGO,(IMG)=>{
                            HEIGHT(IMG,"200px");
                        });
                        VIEWS(HOLDEE,(DATA)=>{
                            HEIGHT(DATA,"50px");
                            LEFTTEXT(DATA,Element.NAME,()=>{});
                        });
                        CLICK(HOLDEE,()=>{
                            JSONIFICATION(Element,(StoredData)=>{
                                SESSIONSTORE("StoredData",StoredData);
                                ROUTE(" ",SHYLANSIRAJANDROIDMOBILEVIEWCLOTHEPAGE,SHYLANSIRAJANDROIDHOMEPAGE);
                            });
                        });
                    });
                });
            });
        });
    },(HOLDER)=>{
        ICONTEXT(HOLDER,WHITEGRIDICON,BLACKGRIDICON,"All",(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE(" ",ALLSHYLANSIRAJPAGE,SHYLANSIRAJANDROIDHOMEPAGE);
            });
        });
        ICONTEXT(HOLDER,WHITEHEARTICON,WHITEHEARTICON,"Saved",(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE(" ",SHYLANSIRAJANDROIDLIKEDITEMPAGE,SHYLANSIRAJANDROIDHOMEPAGE);
            });
        });
        ICONTEXT(HOLDER,WHITEUSERICON,BLACKUSERICON,"Profile",(DATA)=>{
            CLICK(DATA,()=>{
                ROUTE(" ",SHYLANSIRAJANDROIDPROFILEPAGE,SHYLANSIRAJANDROIDHOMEPAGE);
            });
        });  
    });
};