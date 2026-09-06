export const ELEMENTED=(HOLDER,NAME,CALLBACk)=>{
    const ELEMENT = document.createElement(NAME);
    CALLBACk(ELEMENT);
    ADD(HOLDER,ELEMENT);
};