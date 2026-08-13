export const TOASTEDMESSAGE=(TERMS,MESSAGE,CALLBACK)=>{
    CONDITION(TERMS,()=>{
        CALLBACK();
    },()=>{
        TOAST(""," ",MESSAGE,()=>{});
    });
};