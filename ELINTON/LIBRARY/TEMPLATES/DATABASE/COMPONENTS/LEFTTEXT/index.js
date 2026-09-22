export const LEFTTEXT=(HOLDER,TEXT,CALLBACK)=>{
    PARAGRAPH(HOLDER,TEXT,(DATA)=>{
        MARGIN(DATA,"auto");
        MARGINLEFT(DATA,"5%");
        LEFTTEXTALIGN(DATA); 
        CALLBACK(DATA);
    });
};