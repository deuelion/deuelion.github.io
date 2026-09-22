export const COUNTRIES=()=>{
    GETDATA(MAINCONNECTIONAPI,"COUNTRIES",(Data)=>{
        const DATA={
            "name":"COUNTRIES",
            "Data":Data
        };
        STOREINDEX ("COUNTRIES","COUNTRIES",DATA,()=>{
        });
    });
};