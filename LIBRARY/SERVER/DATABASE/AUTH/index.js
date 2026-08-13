export const AUTH=()=>{
    CONDITION(sessionStorage.getItem("Access"),()=>{
        GETDATA(MAINCONNECTIONAPI,"CONNECTION",(Data)=>{
            FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                TOASTEDMESSAGE(User.USERPASSWORD === sessionStorage.getItem("UserPassword"),"Wrong User Details",()=>{
                    CHECK(!localStorage.getItem("User"),()=>{
                        LOCALSTORE("User",User.ID);
                        RELOAD();
                    });
                });
            });
        });
    },()=>{
        GETDATA(MAINCONNECTIONAPI,"CONNECTION",(Data)=>{
            REDUX(Data,(Element)=>{
                CHECK( sessionStorage.getItem("UserEmail") !== Element.USEREMAIL,()=>{
                    const HEADER=["FIRSTNAME", "MIDDLENAME", "LASTNAME", "USEREMAIL", "USERPASSWORD", "LOCATION", "IMAGE", "APPNAME", "STATUS", "ACCESS", "DATECREATED", "DATEUPDATED", "ACCOUNTS", "PHONENUMBER", "PREMIUM", "DEVICE", "COUNTRY"];
                    const DATA=["","","",sessionStorage.getItem("UserEmail"),sessionStorage.getItem("UserPassword"),localStorage.getItem("TIMEZONE"),"",localStorage.getItem("AppName"),"","Approved",new Date(),"","","","","",""];
                    CHECK(!localStorage.getItem("User"),()=>{
                        INSERTDATA(MAINCONNECTIONAPI,"CONNECTION",HEADER,DATA,(Datata)=>{
                            LOCALSTORE("User",Datata.uniqueId);
                            RELOAD();
                        });
                    });
                });
            });
        });
    });
};