export const GETDATA=(LINK,NAME,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "spreadsheetUrl":LINK,
            "sheetName":NAMEDATA,
        };
        FETCH(GETDATAAPI,DATA,(Data)=>{
            CALLBACK(Data);
        });
    });
}; 