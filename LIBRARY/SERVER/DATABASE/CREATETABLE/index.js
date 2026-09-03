export const CREATETABLE=(LINK,NAME,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "spreadsheetUrl":LINK,
            "sheetName":NAMEDATA,
        };
        FETCH(CREATETABLEAPI,DATA,(Data)=>{
            CHECK(Data.error === false,()=>{
                GETDATA(MAINCONNECTIONAPI,"DATABASES",(Datated)=>{
                    REDUX(Datated,(Element)=>{
                        CHECK(Element.DATABASELINK === LINK,()=>{
                            JSONADDER(Element.DATABASETABLES,`"${[NAMEDATA]}"`,(TABLES)=>{
                                SESSIONSTORE("DataBases",TABLES);
                                const INFO=[Element.DATABASENAME,Element.DATABASELINK,sessionStorage.getItem("DataBases"),Element.DATE,Element.ACCESS,Element.ADMIN];
                                UPDATEDATA(MAINCONNECTIONAPI,"DATABASES",Element.ID,INFO,()=>{
                                    CALLBACK("Table Created Successfully");
                                    SESSIONDELETE("DataBases");
                                });
                            });
                        });
                    });
                });;
            });
        });
    });
}; 