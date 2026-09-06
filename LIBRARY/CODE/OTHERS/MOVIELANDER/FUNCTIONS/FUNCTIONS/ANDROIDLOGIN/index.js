export const ANDROIDLOGINPAGE=()=>{
    CONDITION(localStorage.getItem("User"),()=>{
        const LOADDATA={
            home: () => {MOVIELANDERANDROIDWEBPAGE();},
        };
        LINKTRACKER(LOADDATA,()=>{
            MOVIELANDERANDROIDWEBPAGE();
        });
    },()=>{
       MOVIELANDERANDROIDWEBLOGINPAGE();
    });
};