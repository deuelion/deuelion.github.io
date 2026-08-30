export const MOVIELANDERANDROIDROUTER=()=>{
    const MOBILEVIEW=()=>{
        ANDROIDLOGINPAGE();
    };
    const DESKTOPVIEW=()=>{
        ANDROIDLOGINPAGE();
    };
    VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});
};