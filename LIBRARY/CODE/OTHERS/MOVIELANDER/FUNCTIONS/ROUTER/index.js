export const MOVIELANDERANDROIDROUTER=()=>{
    CLOUDSERVERDOWNLOAD("MOVIES");
    const MOBILEVIEW=()=>{
        ANDROIDLOGINPAGE();
    };
    const DESKTOPVIEW=()=>{
        ANDROIDLOGINPAGE();
    };
    VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});
};