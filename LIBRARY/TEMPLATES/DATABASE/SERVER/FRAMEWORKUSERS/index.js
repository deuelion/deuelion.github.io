export const FRAMEWORKUSERS=()=>{
    GETDATA(MAINCONNECTIONAPI,"FRAMEWORK",(Data)=>{
        console.log("Active Users : ",Data.length-1);
    });
};