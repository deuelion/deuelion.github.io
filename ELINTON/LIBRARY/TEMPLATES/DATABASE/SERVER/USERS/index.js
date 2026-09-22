export const FRAMEWORKUSER=()=>{
    CHECK(localStorage.getItem("ENV") !== "DEV",()=>{
        CONDITION(localStorage.getItem("UserID"),()=>{
            GETDATA(MAINCONNECTIONAPI,"FRAMEWORK",(DATA)=>{
                REDUX(DATA,(Element)=>{
                    let NumbersVisited=localStorage.getItem("Visted");
                    CHECK(Element.ID === localStorage.getItem("UserID"),()=>{
                        const DATA=[localStorage.getItem("OperatingSystem"),localStorage.getItem("Device"),NumbersVisited++,new Date(),Element.PLATFORM,Element.ENV,Element.ACCESS,localStorage.getItem("TIMEZONE")];
                        UPDATEDATA(MAINCONNECTIONAPI,"FRAMEWORK",Element.ID,DATA,(Data)=>{   
                            LOCALSTORE("Visted",NumbersVisited++);
                        });
                    });
                });
            });
        },()=>{
            LOCALSTORE("Visted","1");
            const HEADERS=["NAME","DEVICE","VISITS","DATE","PLATFORM","ENV","ACCESS","LOCATION"];
            const DATA=[localStorage.getItem("OperatingSystem"),localStorage.getItem("Device"),"1",new Date(),localStorage.getItem("ENV"),localStorage.getItem("AppName"),"Approved",localStorage.getItem("TIMEZONE")];
            INSERTDATA(MAINCONNECTIONAPI,"FRAMEWORK",HEADERS,DATA,(Data)=>{
                LOCALSTORE("UserID",Data.uniqueId);
            });
        });
    });
};