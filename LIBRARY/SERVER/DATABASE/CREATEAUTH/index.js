export const CREATEAUTH=(LINK,NAME)=>{
    OFFLINE(()=>{
        TOAST("","Please Wait,Verification In Progress!",()=>{            
            GETDATA(LINK,NAME,(Data)=>{
                FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                    TOAST("","User With Account Found,Log In",()=>{});
                },(False)=>{
                    const HEADER=["FIRSTNAME", "MIDDLENAME", "LASTNAME", "USEREMAIL", "USERPASSWORD", "LOCATION", "IMAGE", "APPNAME", "STATUS", "ACCESS", "DATECREATED", "DATEUPDATED", "ACCOUNTS", "PHONENUMBER", "PREMIUM", "DEVICE", "COUNTRY"];
                    const DATA=[sessionStorage.getItem("UserName"),"","",sessionStorage.getItem("UserEmail"),sessionStorage.getItem("UserPassword"),localStorage.getItem("TIMEZONE"),"",localStorage.getItem("AppName"),"","Approved",new Date(),"","","","","",""];
                    INSERTDATA(LINK,NAME,HEADER,DATA,(Datata)=>{
                        LOCALSTORE("User",Datata.uniqueId);
                        RELOAD();
                    });
                });
            });
        });
    });
};