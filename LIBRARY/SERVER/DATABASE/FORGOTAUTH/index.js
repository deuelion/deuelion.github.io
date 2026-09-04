export const FORGOTAUTH=(LINK,NAME)=>{
    OFFLINE(()=>{
        TOAST("","Please Wait,Verification In Progress!",()=>{            
            GETDATA(LINK,NAME,(Data)=>{
                FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                    TOASTEDMESSAGE(User.USEREMAIL === sessionStorage.getItem("UserEmail"),"Wrong User Email",()=>{
                        CHECK(!localStorage.getItem("User"),()=>{
                            LOCALSTORE("User",User.ID);
                            RELOAD();
                        });
                    });
                });
            });
        });
    });
};