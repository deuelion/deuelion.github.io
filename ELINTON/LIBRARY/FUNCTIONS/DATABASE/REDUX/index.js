export const REDUX=(DATA,CALLBACK)=>{
    DATA.forEach(element => {
        CALLBACK(element);
    });
};