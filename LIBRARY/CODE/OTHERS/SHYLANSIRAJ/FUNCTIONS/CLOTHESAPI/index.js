export const SHYRAJCLOTHESAPI=()=>{
    GETDATA(SHYRAJDATABASEMAINAPI,"SHYLANSIRAJFASHIONHUB",(Data)=>{
        const DATA={
            "Name":"CLOTHES",
            "Data":Data
        };
        STOREINDEX ("CLOTHES","CLOTHES",DATA,()=>{
        });
    });
};