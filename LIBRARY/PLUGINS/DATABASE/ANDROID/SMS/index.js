export const GETSMS = (CALLBACK)=>{
    CONDITION(localStorage.getItem("ENV") === "ANDROID",()=>{
        if(!window.AndroidSMS){callback([]);return;}
        const json =AndroidSMS.getAllSms();
        const sms =JSON.parse(json);
        REDUX(sms,(Data)=>{
            CALLBACK(Data);
        });
    },()=>{
        FETCH("https://eliteserving.github.io/LIBRARY/DEMO/Sms.json","",(Data)=>{
            REDUX(Data,(DATA)=>{
                CALLBACK(DATA);
            });
        });
    });
};