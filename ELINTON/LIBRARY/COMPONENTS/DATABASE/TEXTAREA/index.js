export const TEXTAREA=(HOLDER,TEXT,NAME,CALLBACk)=>{
    ELEMENTED(HOLDER,"textarea",(DATA)=>{
        COMPOMODE(DATA);
        TEXTCOMPOMODE(DATA);
        PLACEHOLDER(DATA,TEXT||"Enter Your Text");
        FUNCTIONED(DATA,"input",()=>{CONDITION(DATA.value,()=>{SESSIONSTORE(NAME,DATA.value);},()=>{SESSIONDELETE(NAME);});});
        CALLBACk(DATA);
    });
};