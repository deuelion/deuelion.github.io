export const MOVIELANDERANDROIDROUTER=()=>{
    LOCALSTORE("API","https://docs.google.com/spreadsheets/d/1F3x65HcvW6rYnXcivjkMGFAEaNz1FpkhWEemTpRp9G0/edit?usp=sharing");
    LOCALSTORE("Store","MOVIELANDER");
    CLOUDSERVERDOWNLOAD("MOVIES");
    const MOBILEVIEW=()=>{
        ANDROIDLOGINPAGE();
    };
    const DESKTOPVIEW=()=>{
        ANDROIDLOGINPAGE();
    };
    VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});
};