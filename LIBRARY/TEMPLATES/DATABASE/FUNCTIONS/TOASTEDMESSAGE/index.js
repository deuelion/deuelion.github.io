export const TOASTEDMESSAGE=(TERMS,MESSAGE,CALLBACK,CALLBACKONE)=>{
    CONDITION(TERMS,()=>{
        CALLBACK();
    },()=>{
        TOAST("",MESSAGE,()=>{});
        CALLBACKONE();
    });
};