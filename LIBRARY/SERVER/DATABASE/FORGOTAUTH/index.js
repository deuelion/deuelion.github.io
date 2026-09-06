export const FORGOTAUTH=(LINK,NAME,TITLE)=>{
    OFFLINE(()=>{
        BOTTOMVIEWSPAGE((DATA)=>{
            LOADINGICON(DATA,(DATATA)=>{
                GETDATA(LINK,NAME,(Data)=>{
                    FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                        SESSIONSTORE("UserName",User.FIRSTNAME);
                        CHECK(!localStorage.getItem("User"),()=>{
                            MOVIELANDERWELCOMEFORGOTEMAIL();
                            SESSIONGET("WELCOMEMESSAGE",(MESSAGE)=>{
                                SENDEMAIL(ELITEMAILAPI,User.USEREMAIL,TITLE,MESSAGE,(Datatata)=>{
                                    TOAST("","Check Your Email For Access Instructions",()=>{
                                        DISPLAYED(DATA,"none");
                                    });
                                });
                            });
                        });
                    },(False)=>{
                        TOAST("","No User Account Found",()=>{
                            DISPLAYED(DATA,"none");
                        },()=>{
                            DISPLAYED(DATA,"none");
                        });
                    });
                });
            });
        });
    });
};