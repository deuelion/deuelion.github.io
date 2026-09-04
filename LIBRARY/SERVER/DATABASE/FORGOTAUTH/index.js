export const FORGOTAUTH=(LINK,NAME)=>{
    OFFLINE(()=>{
        BOTTOMVIEWSPAGE((DATA)=>{
            LOADINGICON(DATA,(DATATA)=>{
                GETDATA(LINK,NAME,(Data)=>{
                    FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                        DISPLAYED(DATA,"none");
                        TOAST("","Reset Link Sent To Your Email !",()=>{});
                    },(False)=>{
                        DISPLAYED(DATA,"none");
                        TOAST("","No User Account Found",()=>{});
                    });
                });
            });
        });
    });
};