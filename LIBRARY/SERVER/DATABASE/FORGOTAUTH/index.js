export const FORGOTAUTH=(LINK,NAME)=>{
    OFFLINE(()=>{
        BOTTOMVIEWSPAGE((DATA)=>{
            LOADINGICON(DATA,(DATATA)=>{
                GETDATA(LINK,NAME,(Data)=>{
                    FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                        TOAST("","Reset Link Sent To Your Email !",()=>{

                        },()=>{
                            DISPLAYED(DATA,"none");
                        });
                    },(False)=>{
                        TOAST("","No User Account Found",()=>{

                        },()=>{
                            DISPLAYED(DATA,"none");
                        });
                    });
                });
            });
        });
    });
};