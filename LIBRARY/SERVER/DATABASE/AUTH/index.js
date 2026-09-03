export const AUTH=()=>{
    const MAIN=localStorage.getItem("API");
    OFFLINE(()=>{
        TOAST("","Please Wait,Verification In Progress!",()=>{            
            CONDITION(sessionStorage.getItem("Access") === "True",()=>{
                GETDATA(MAIN,"User",(Data)=>{
                    FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                        TOASTEDMESSAGE(User.USEREMAIL === sessionStorage.getItem("UserEmail"),"Wrong User Email",()=>{
                            TOASTEDMESSAGE(User.USERPASSWORD === sessionStorage.getItem("UserPassword"),"Wrong User Password",()=>{
                                CHECK(!localStorage.getItem("User"),()=>{
                                    LOCALSTORE("User",User.ID);
                                    RELOAD();
                                });
                            });
                        });
                    });
                });
            },()=>{
                CONDITION(sessionStorage.getItem("Access") === "False",()=>{
                    GETDATA(MAIN,"User",(Data)=>{
                        FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                            TOASTEDMESSAGE(User.USEREMAIL === sessionStorage.getItem("UserEmail"),"User Email Doesnot Exist",()=>{
                                RELOAD();
                            });
                        });
                    });
                },()=>{
                    GETDATA(MAIN,"User",(Data)=>{
                        REDUX(Data,(Element)=>{
                            CHECK( sessionStorage.getItem("UserEmail") !== Element.USEREMAIL,()=>{
                                const HEADER=["FIRSTNAME", "MIDDLENAME", "LASTNAME", "USEREMAIL", "USERPASSWORD", "LOCATION", "IMAGE", "APPNAME", "STATUS", "ACCESS", "DATECREATED", "DATEUPDATED", "ACCOUNTS", "PHONENUMBER", "PREMIUM", "DEVICE", "COUNTRY"];
                                const DATA=[sessionStorage.getItem("UserName"),"","",sessionStorage.getItem("UserEmail"),sessionStorage.getItem("UserPassword"),localStorage.getItem("TIMEZONE"),"",localStorage.getItem("AppName"),"","Approved",new Date(),"","","","","",""];
                                CHECK(!localStorage.getItem("User"),()=>{
                                    INSERTDATA(MAIN,"User",HEADER,DATA,(Datata)=>{
                                        LOCALSTORE("User",Datata.uniqueId);
                                        RELOAD();
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
};