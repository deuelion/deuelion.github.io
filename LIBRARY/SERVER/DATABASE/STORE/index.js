export const STOREUSER=()=>{
    CHECK(localStorage.getItem("User"),()=>{
        GETDATA(MAINCONNECTIONAPI,"CONNECTION",(Data)=>{
            FINDER(Data,"ID",localStorage.getItem("User"),(User)=>{
                const DATA={
                    "name":"USERDATA",
                    "Data":User
                };
                STOREINDEX("USERDATA","USERDATA",DATA,()=>{});
            });
        });
    });
};