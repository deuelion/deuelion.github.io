export const JSONIFICATION=(DATA,CALLBACK)=>{
    let DATATA = JSON.stringify(DATA);
    CALLBACK(DATATA);
};