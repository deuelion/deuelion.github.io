export const INSERTDATA=(LINK,NAME,HEADERS,INFO,CALLBACK)=>{
    CAPITALIZED(NAME,(NAMEDATA)=>{
        const DATA={
            "spreadsheetUrl":LINK,
            "sheetName":NAMEDATA,
            "Headers":HEADERS,
            "Data":INFO
        };
        FETCH(INSERTDATAAPI,DATA,(Data)=>{
            CALLBACK(Data);
        });
    });
}; 