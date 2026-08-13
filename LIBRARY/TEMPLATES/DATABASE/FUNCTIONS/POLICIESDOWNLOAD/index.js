export const POLICIESDOWNLOAD=(NAME,DATA,CALLBACK)=>{
    const TITLE = document.title;
    CONDITION(TITLE === "EliteBuilder",()=>{
        const LINK="../LIBRARY/POLICIES/"+NAME;
        TEXTFETCH(LINK,DATA,(Data)=>{
            CALLBACK(Data);  
        });
    },()=>{
        const LINK="https://eliteserving.github.io/LIBRARY/POLICIES/"+NAME;
        TEXTFETCH(LINK,DATA,(Data)=>{
            CALLBACK(Data);
        });
    });
};