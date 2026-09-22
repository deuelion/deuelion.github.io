export const SENDEMAIL=(LINK,EMAIL,SUBJECT,MESSAGE,CALLBACK)=>{
    const DATA={
        "recipientEmail":EMAIL,
        "subject":SUBJECT,
        "body":MESSAGE        
    };
    FETCH(LINK,DATA,(Data)=>{
        TOASTEDMESSAGE(Data.status === "success","Something Went Wrong Try Again",()=>{
           CALLBACK();
        });
    });
};