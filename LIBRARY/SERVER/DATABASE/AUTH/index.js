export const AUTH=(LINK,NAME)=>{
    OFFLINE(()=>{
        BOTTOMVIEWSPAGE((DATA)=>{
            LOADINGICON(DATA,(DATATA)=>{
                GETDATA(LINK,NAME,(Data)=>{
                    FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                        TOASTEDMESSAGE(User.USERPASSWORD === sessionStorage.getItem("UserPassword"),"Wrong User Password",()=>{
                            CHECK(!localStorage.getItem("User"),()=>{
                                LOCALSTORE("User",User.ID);
                                RELOAD();
                            });
                        });
                    },(False)=>{
                        DISPLAYED(DATA,"none");
                        TOAST("","No User Account Found",()=>{});
                    });
                });
            });
        });
    });
};