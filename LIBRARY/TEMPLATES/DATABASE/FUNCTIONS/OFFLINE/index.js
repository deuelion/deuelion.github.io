export const OFFLINE=(CALLBACK)=>{
    TOASTEDMESSAGE(navigator.onLine,"Your Offline,Check Your Internet",()=>{
        CALLBACK();
    });
};