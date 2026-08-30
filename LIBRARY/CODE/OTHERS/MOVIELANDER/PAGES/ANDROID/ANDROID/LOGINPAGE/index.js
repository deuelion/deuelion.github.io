export const MOVIELANDERANDROIDWEBLOGINPAGE=()=>{
    IMAGEVIEW("",MOVIELANDERLOGO,(DATA)=>{
            WIDTH(DATA,"90%");
            HEIGHT(DATA,"30%");
            BORDERRADIUS(DATA,"20px");
    });
    HEADER("","Your Home Cinema",(DATA)=>{
        FONTSIZE(DATA,"25px");
    });
    BREAK("",()=>{});BREAK("",()=>{});
    INPUT("","email","Enter Your Email","UserEmail",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    INPUT("","email","Enter Your Password","UserPassword",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    RIGHTTEXT("","Forgot Password?",(DATA)=>{
        MARGINRIGHT(DATA,"8%");
    });
    BREAK("",()=>{});
    BUTTON("","Sign In",(DATA)=>{
        BACKGROUND(DATA,"forestgreen");
    });
};