export const FORGOTAUTH=(LINK,NAME)=>{
    OFFLINE(()=>{
        TOAST("","Please Wait,Verification In Progress!",()=>{            
            GETDATA(LINK,NAME,(Data)=>{
                FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                    TOAST("","Reset Link Sent To Your Email !",()=>{});
                },(False)=>{
                    TOAST("","No User Account Found",()=>{});
                });
            });
        });
    });
};