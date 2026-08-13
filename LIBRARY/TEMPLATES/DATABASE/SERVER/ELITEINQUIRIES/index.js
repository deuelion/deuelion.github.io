export const ELITEINQUIRIES=(NAME)=>{
    const HEAD=["NAME","EMAIL","SUBJECT","MESSAGE","DATE","ACCESS"];
    const DATA=[sessionStorage.getItem("Name"),sessionStorage.getItem("Email"),sessionStorage.getItem("Subject"),sessionStorage.getItem("Message"),new Date(),"Approved"];
    const Message=`Dear ${sessionStorage.getItem("Name")}\n,We Have Recieved Your Email;\n We Shall Be Intouch\n Thank You Elite Robust Ontology Team.`
    SENDEMAIL(ELITEEMAILSENDER,sessionStorage.getItem("Email"),"Inquires Response",Message,(Data)=>{
        INSERTDATA(ELITEDATABASELINK,NAME,HEAD,DATA,()=>{
            RELOAD();
        });
    });
};