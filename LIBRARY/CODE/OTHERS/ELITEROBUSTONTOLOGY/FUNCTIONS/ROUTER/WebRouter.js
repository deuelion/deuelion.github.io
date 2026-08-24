export const ELITEROBUSTONTOLOGYWEBROUTER=()=>{
    const MOBILEVIEW=()=>{
        const LOADDATA={
            home: () => {ELITEROBUSTONTOLOGYWEBMOBILEPAGE();},
        };
        LINKTRACKER(LOADDATA,()=>{
            ELITEROBUSTONTOLOGYWEBMOBILEPAGE();
        });
    };
    const DESKTOPVIEW=()=>{
        const LOADDATA={
            home: () => {ELITEROBUSTONTOLOGYWEBMOBILEPAGE();},
        };
        LINKTRACKER(LOADDATA,()=>{
            ELITEROBUSTONTOLOGYWEBMOBILEPAGE();
        }); 
    };
    VIEW(()=>{MOBILEVIEW();},()=>{DESKTOPVIEW()});
};