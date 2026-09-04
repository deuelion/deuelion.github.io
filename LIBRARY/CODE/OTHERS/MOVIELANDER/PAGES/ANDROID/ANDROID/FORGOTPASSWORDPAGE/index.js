export const MOVIELANDERANDROIDWEBFORGOTPASSWORDPAGE=()=>{
    USERS();CLEAR("");BREAK("",()=>{});
    IMAGEVIEW("",MOVIELANDERLOGO,(DATA)=>{
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"30%");
        BORDERRADIUS(DATA,"5px");
    });
    HEADER("","Your Home Cinema",(DATA)=>{
        FONTSIZE(DATA,"25px");
    });
    BREAK("",()=>{});
    INPUT("","email","johndoe@gmail.com","UserEmail",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    BUTTON("","Recover",(DATA)=>{
        BACKGROUND(DATA,"forestgreen");
        CLICK(DATA,()=>{
            TOASTEDMESSAGE(sessionStorage.getItem("UserEmail"),"Enter User Email",()=>{
                FORGOTAUTH(MOVIELANDERAPI,"User");
            },()=>{
                MOVIELANDERWELCOMEEMAIL();
            });
        });
    });
    BREAK("",()=>{});BREAK("",()=>{});
    HEADER("","I Remember My Details, Log In ?",(DATA)=>{
        CLICK(DATA,()=>{
            ROUTE("",MOVIELANDERANDROIDWEBLOGINPAGE,"MOVIELANDERANDROIDWEBLOGINPAGE");
        });
    });
    BREAK("",()=>{});BREAK("",()=>{});
};