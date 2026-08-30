export const MOVIELANDERANDROIDROUTER=()=>{
    const MOBILEVIEW=()=>{
        ANDROIDLOGINPAGE();
    };
    const DESKTOPVIEW=()=>{
        const LOADDATA={
            home: () => {MOVIELANDERANDROIDWEBPAGE();},
        };
        LINKTRACKER(LOADDATA,()=>{
            MOVIELANDERANDROIDWEBPAGE();
        }); 
    };
    VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});
};