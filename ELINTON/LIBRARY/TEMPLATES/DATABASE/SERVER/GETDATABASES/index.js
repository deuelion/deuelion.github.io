export const GETDATABASES=(CALLBACK)=>{
    GETDATA(MAINCONNECTIONAPI,"DATABASES",(DATA)=>{
        REDUX(DATA,(Data)=>{
            CALLBACK(Data);
        });
    });
};