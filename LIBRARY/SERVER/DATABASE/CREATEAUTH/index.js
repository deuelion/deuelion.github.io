export const CREATEAUTH=(LINK,NAME)=>{
    OFFLINE(()=>{
        TOAST("","Please Wait,Verification In Progress!",()=>{            
            GETDATA(LINK,NAME,(Data)=>{
                REDUX(Data,(Element)=>{
                    CHECK( sessionStorage.getItem("UserEmail") !== Element.USEREMAIL,()=>{
                        const HEADER=["FIRSTNAME", "MIDDLENAME", "LASTNAME", "USEREMAIL", "USERPASSWORD", "LOCATION", "IMAGE", "APPNAME", "STATUS", "ACCESS", "DATECREATED", "DATEUPDATED", "ACCOUNTS", "PHONENUMBER", "PREMIUM", "DEVICE", "COUNTRY"];
                        const DATA=[sessionStorage.getItem("UserName"),"","",sessionStorage.getItem("UserEmail"),sessionStorage.getItem("UserPassword"),localStorage.getItem("TIMEZONE"),"",localStorage.getItem("AppName"),"","Approved",new Date(),"","","","","",""];
                        CHECK(!localStorage.getItem("User"),()=>{
                            INSERTDATA(LINK,NAME,HEADER,DATA,(Datata)=>{
                                LOCALSTORE("User",Datata.uniqueId);
                                RELOAD();
                            });
                        });
                    });
                });
            });
        });
    });
};