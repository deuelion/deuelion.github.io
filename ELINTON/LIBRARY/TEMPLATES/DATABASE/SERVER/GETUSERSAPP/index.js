export const GETUSERDATAAPP=(CALLBACK)=>{
    GETINDEX("USERDATA","USERDATA",(Datata)=>{
        REDUX(Datata,(Element)=>{
            CALLBACK(Element.Data);
        });
    });
};