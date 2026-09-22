export const GETFILES=(CALLBACK)=>{
    GETDATA(MAINCONNECTIONAPI,"UPLOADS",(DATA)=>{
        REDUX(DATA,(Data)=>{
            CALLBACK(Data);
        });
    });
};