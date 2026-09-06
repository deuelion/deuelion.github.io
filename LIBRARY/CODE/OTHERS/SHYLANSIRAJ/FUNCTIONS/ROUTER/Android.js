export const SHYRAJANDROIDROUTER=()=>{
    const MOBILEVIEW=()=>{
        SHYRAJCLOTHESAPI();
        const LOADDATA={
            home: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
        };
        LINKTRACKER(LOADDATA,()=>{
            SHYLANSIRAJANDROIDSTARTPAGE();
        });
    };
    const DESKTOPVIEW=()=>{
        const LOADDATA={
            home: () => {SHYLANSIRAJANDROIDSTARTPAGE();},
        };
        LINKTRACKER(LOADDATA,()=>{
            SHYLANSIRAJANDROIDSTARTPAGE();
        }); 
    };
    VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});
};