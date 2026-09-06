export const CLOUDSERVERDOWNLOAD=(NAME)=>{
    GETDATA(MAINCONNECTIONAPI,NAME,(Data)=>{
        const DATA={
            "name":NAME,
            "Data":Data
        };
        STOREINDEX (NAME,NAME,DATA,()=>{
        });
    });
};