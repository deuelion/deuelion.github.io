export const VIEW=(CALLBACK,CALLBACKONE)=>{
    SCREENWIDTH((DATA)=>{
        CONDITION(DATA <= 800,()=>{
            CALLBACK();
        },()=>{
            CALLBACKONE();
        });
    });
};