export const AUTH=(LINK,NAME,TITLE)=>{
    OFFLINE(()=>{
        BOTTOMVIEWSPAGE((DATA)=>{
            LOADINGICON(DATA,(DATATA)=>{
                GETDATA(LINK,NAME,(Data)=>{
                    FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                        TOASTEDMESSAGE(sessionStorage.getItem("UserPassword") === User.USERPASSWORD,"Wrong User Password",()=>{
                            SESSIONSTORE("UserName",User.FIRSTNAME);
                            MOVIELANDERWELCOMEBACKEMAIL();
                            SESSIONGET("WELCOMEMESSAGE",(MESSAGES)=>{
                                SENDEMAIL(ELITEMAILAPI,sessionStorage.getItem("UserEmail"),TITLE,MESSAGES,(Datatata)=>{
                                    LOCALSTORE("User",User.ID);
                                    RELOAD();
                                });
                            });
                        },()=>{
                            DISPLAYED(DATA,"none");
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