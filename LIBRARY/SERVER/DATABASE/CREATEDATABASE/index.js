export const CREATEDATABASE=(NAME,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "sheetName":NAMEDATA
        };
        FETCH(CREATEDATABASEAPI,DATA,(Data)=>{
            CHECK(Data.error === false,()=>{
                DATETODAY((TIME)=>{
                    const HEADERS=["DATABASENAME","DATABASELINK","DATABASETABLES","DATE","ACCESS","ADMIN"];
                    const INFO=[NAMEDATA,Data.spreadsheetUrl+"?usp=sharing",`"${NAMEDATA}"`,TIME,"Approved","Elite"];
                    INSERTDATA(MAINCONNECTIONAPI,"DATABASES",HEADERS,INFO,(InsBack)=>{
                        CHECK(Data.error === false,()=>{
                            CALLBACK("Data Base Created Successfully");
                        });
                    });
                });
            });
        });
    });
}; 