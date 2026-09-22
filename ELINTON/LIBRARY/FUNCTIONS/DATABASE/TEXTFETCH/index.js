export const TEXTFETCH=(LINK,DATA,CALLBACK)=>{
    ONLINE(()=>{
        CONDITION(DATA,()=>{
            fetch(LINK,{
                mode:"cors",
                method:"POST",
                body: JSON.stringify(DATA)
            })
            .then(res =>res.text())
            .then(Data =>{
                CALLBACK(Data);
            })
            .catch(Error =>{console.log(Error)})
        },()=>{
            fetch(LINK)
            .then(res =>res.text())
            .then(Data =>{
                CALLBACK(Data);
            })
            .catch(Error =>{console.log(Error)})
        });
    });
};