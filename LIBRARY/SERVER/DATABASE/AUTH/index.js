export const AUTH=(LINK,NAME,TITLE)=>{
    OFFLINE(()=>{
        BOTTOMVIEWSPAGE((DATA)=>{
            LOADINGICON(DATA,(DATATA)=>{
                GETDATA(LINK,NAME,(Data)=>{
                    FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                        TOASTEDMESSAGE(User.USERPASSWORD === sessionStorage.getItem("UserPassword"),"Wrong User Password",()=>{
                            SESSIONSTORE("UserName",User.USERNAME);
                            MOVIELANDERWELCOMEBACKEMAIL();
                            CHECK(!localStorage.getItem("User"),()=>{
                                LOCALSTORE("User",User.ID);
                                SESSIONGET("WELCOMEMESSAGE",(MESSAGE)=>{
                                    SENDEMAIL(ELITEMAILAPI,sessionStorage.getItem("UserEmail"),TITLE,MESSAGE,(Datatata)=>{
                                        RELOAD();
                                    });
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