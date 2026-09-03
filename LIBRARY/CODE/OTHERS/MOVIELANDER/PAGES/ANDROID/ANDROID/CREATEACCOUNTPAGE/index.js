export const MOVIELANDERANDROIDWEBCREATEACCOUNTPAGE=()=>{
    CLEAR("");BREAK("",()=>{});
    IMAGEVIEW("",MOVIELANDERLOGO,(DATA)=>{
        WIDTH(DATA,"90%");
        HEIGHT(DATA,"30%");
        BORDERRADIUS(DATA,"5px");
    });
    HEADER("","Your Home Cinema",(DATA)=>{
        FONTSIZE(DATA,"25px");
    });
    BREAK("",()=>{});
    INPUT("","email","John Doe","UserName",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    INPUT("","email","johndoe@gmail.com","UserEmail",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    INPUT("","email","********","UserPassword",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    BUTTON("","Sign Up",(DATA)=>{
        BACKGROUND(DATA,"forestgreen");
        CLICK(DATA,()=>{
            TOASTEDMESSAGE(sessionStorage.getItem("UserName"),"Enter User Name",()=>{
                TOASTEDMESSAGE(sessionStorage.getItem("UserEmail"),"Enter User Email",()=>{
                    TOASTEDMESSAGE(sessionStorage.getItem("UserPassword"),"Enter User Password",()=>{
                       USERS();AUTH();
                    });
                });
            });
        });
    });
    BREAK("",()=>{});BREAK("",()=>{});
    HEADER("","Old Buddy Here,Back To Community?",(DATA)=>{
        CLICK(DATA,()=>{
            ROUTE("",MOVIELANDERANDROIDWEBLOGINPAGE,"MOVIELANDERANDROIDWEBLOGINPAGE");
        });
    });
    BREAK("",()=>{});BREAK("",()=>{});
};
