export const AUTH=(LINK,NAME,TITLE)=>{
    OFFLINE(()=>{
        BOTTOMVIEWSPAGE((DATA)=>{
            LOADINGICON(DATA,(DATATA)=>{
                GETDATA(LINK,NAME,(Data)=>{
                    FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                        SESSIONSTORE("UserName",User.FIRSTNAME);
                        TOASTEDMESSAGE(User.USERPASSWORD === sessionStorage.getItem("UserPassword"),"Wrong User Password",()=>{
                            MOVIELANDERWELCOMEBACKEMAIL();
                            SESSIONGET("WELCOMEMESSAGE",(MESSAGE)=>{
                                SENDEMAIL(ELITEMAILAPI,User.USEREMAIL,TITLE,MESSAGE,(Datatata)=>{
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