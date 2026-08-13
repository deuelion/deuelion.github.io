export const EROXIANWEBROUTES=()=>{
    const MOBILEVIEW=()=>{
        const LOADDATA={
            home: () => {EROXIANWEBMOBILEHOMEPAGE();},
        };
        LINKTRACKER(LOADDATA,()=>{
            EROXIANWEBMOBILEHOMEPAGE();
        });
    };
    const DESKTOPVIEW=()=>{
        const LOADDATA={
            home: () => {EROXIANWEBMOBILEHOMEPAGE();},
        };
        LINKTRACKER(LOADDATA,()=>{
            EROXIANWEBMOBILEHOMEPAGE();
        });
    };
    VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});
};