export const MOVIELANDERANDROIDWEBLOGINPAGE=()=>{
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
    INPUT("","password","********","UserPassword",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    RIGHTTEXT("","Forgot Password ?",(DATA)=>{
        MARGINRIGHT(DATA,"8%");
        CLICK(DATA,()=>{
            ROUTE(" ",MOVIELANDERANDROIDWEBFORGOTPASSWORDPAGE,"MOVIELANDERANDROIDWEBLOGINPAGE");
        });
    });
    BREAK("",()=>{});
    BUTTON("","Sign In",(DATA)=>{
        BACKGROUND(DATA,"forestgreen");
        CLICK(DATA,()=>{
            TOASTEDMESSAGE(sessionStorage.getItem("UserEmail"),"Enter User Email",()=>{
                TOASTEDMESSAGE(sessionStorage.getItem("UserPassword"),"Enter User Password",()=>{
                    MOVIELANDERWELCOMEBACKEMAIL();
                    SESSIONGET("WELCOMEMESSAGE",(Message)=>{
                        AUTH(MOVIELANDERAPI,"User","Movie Lander Login Alert",Message);
                    });
                });
            });
        });
    });
    BREAK("",()=>{});BREAK("",()=>{});
    HEADER("","New Here,Lets Join The Community !",(DATA)=>{
        CLICK(DATA,()=>{
            ROUTE(" ",MOVIELANDERANDROIDWEBCREATEACCOUNTPAGE,"MOVIELANDERANDROIDWEBLOGINPAGE");
        });
    });
    BREAK("",()=>{});BREAK("",()=>{});
};