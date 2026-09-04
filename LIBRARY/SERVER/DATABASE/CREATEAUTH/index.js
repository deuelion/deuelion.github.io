export const CREATEAUTH=(LINK,NAME,TITLE,MESSAGE)=>{
    OFFLINE(()=>{
        TOAST("","Please Wait,Verification In Progress!",()=>{            
            GETDATA(LINK,NAME,(Data)=>{
                FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                    TOAST("","User With Account Found,Log In",()=>{});
                },(False)=>{
                    const HEADER=["FIRSTNAME", "MIDDLENAME", "LASTNAME", "USEREMAIL", "USERPASSWORD", "LOCATION", "IMAGE", "APPNAME", "STATUS", "ACCESS", "DATECREATED", "DATEUPDATED", "ACCOUNTS", "PHONENUMBER", "PREMIUM", "DEVICE", "COUNTRY","USERDATA","LOCATIONS","DEVICES","ACTIVITY","SESSIONS","VERIFICATION","ACCESS","OWNER"];
                    const DATA=[sessionStorage.getItem("UserName"),"","",sessionStorage.getItem("UserEmail"),sessionStorage.getItem("UserPassword"),localStorage.getItem("TIMEZONE"),"",localStorage.getItem("AppName"),"","Approved",new Date(),"","","","","","","","","","","","","Approved","Elite Robust Ontology"];
                    SENDEMAIL(ELITEMAILAPI,sessionStorage.getItem("UserEmail"),TITLE,MESSAGE,(Datata)=>{
                        INSERTDATA(LINK,NAME,HEADER,DATA,(Datata)=>{
                            LOCALSTORE("User",Datata.uniqueId);
                            RELOAD();
                        });
                    });
                });
            });
        });
    });
};