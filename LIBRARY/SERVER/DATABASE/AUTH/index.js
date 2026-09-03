export const AUTH=()=>{
    OFFLINE(()=>{
        TOAST("","Please Wait,Verification In Progress!",()=>{            
            CONDITION(sessionStorage.getItem("Access") === "True",()=>{
                GETDATA(MAINCONNECTIONAPI,"CONNECTION",(Data)=>{
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
                    GETDATA(MAINCONNECTIONAPI,"CONNECTION",(Data)=>{
                        FINDER(Data,"USEREMAIL",sessionStorage.getItem("UserEmail"),(User)=>{
                            TOASTEDMESSAGE(User.USEREMAIL === sessionStorage.getItem("UserEmail"),"User Email Doesnot Exist",()=>{
                                RELOAD();
                            });
                        });
                    });
                },()=>{
                    GETDATA(MAINCONNECTIONAPI,"CONNECTION",(Data)=>{
                        REDUX(Data,(Element)=>{
                            CHECK( sessionStorage.getItem("UserEmail") !== Element.USEREMAIL,()=>{
                                const HEADER=["FIRSTNAME", "MIDDLENAME", "LASTNAME", "USEREMAIL", "USERPASSWORD", "LOCATION", "IMAGE", "APPNAME", "STATUS", "ACCESS", "DATECREATED", "DATEUPDATED", "ACCOUNTS", "PHONENUMBER", "PREMIUM", "DEVICE", "COUNTRY"];
                                const DATA=[sessionStorage.getItem("UserName"),"","",sessionStorage.getItem("UserEmail"),sessionStorage.getItem("UserPassword"),localStorage.getItem("TIMEZONE"),"",localStorage.getItem("AppName"),"","Approved",new Date(),"","","","","",""];
                                CHECK(!localStorage.getItem("User"),()=>{
                                    INSERTDATA(MAINCONNECTIONAPI,"CONNECTION",HEADER,DATA,(Datata)=>{
                                        INSERTDATA(localStorage.getItem("API"),localStorage.getItem("Store"),HEADER,DATA,(Datatata)=>{
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
    });
};