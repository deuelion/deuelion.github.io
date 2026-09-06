export const OFFLINE=(CALLBACK,CALLBACKONE)=>{
    TOASTEDMESSAGE(navigator.onLine,"Your Offline,Check Your Internet",()=>{
        CALLBACK();
    },()=>{
        CALLBACKONE();
    });
};