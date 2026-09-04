export const AUTH=(LINK,NAME)=>{
    OFFLINE(()=>{
        TOAST("","Please Wait,Verification In Progress!",()=>{            
            GETDATA(LINK,NAME,(Data)=>{
                FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                    TOASTEDMESSAGE(User.USERPASSWORD === sessionStorage.getItem("UserPassword"),"Wrong User Password",()=>{
                        CHECK(!localStorage.getItem("User"),()=>{
                            LOCALSTORE("User",User.ID);
                            RELOAD();
                        });
                    });
                },(False)=>{
                    TOAST("","No User Account Found",()=>{});
                });
            });
        });
    });
};