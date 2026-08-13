export const EROXIANWEBMOBILECONTACTUSPAGE=(HOLDER)=>{
    HEADER(HOLDER,"Fill The Form Below",()=>{});
    BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"text","John Doe","UserName",()=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"email","johndoe@gmail.com","UserEmail",()=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    INPUT(HOLDER,"text","InQuiries","Inquiries",()=>{});
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    TEXTAREA(HOLDER,"Hello ,This Is My Message","UserMessage",(DATA)=>{
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"300px");
    });
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
    BUTTON(HOLDER,"Send Message",(DATA)=>{
        BACKGROUND(DATA,"green");
    });
    BREAK(HOLDER,()=>{});BREAK(HOLDER,()=>{});
};