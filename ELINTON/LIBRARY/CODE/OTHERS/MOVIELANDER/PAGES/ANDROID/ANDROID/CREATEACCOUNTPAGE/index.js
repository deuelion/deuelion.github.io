export const MOVIELANDERANDROIDWEBCREATEACCOUNTPAGE=()=>{
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
    INPUT("","text","John Doe","UserName",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    INPUT("","email","johndoe@gmail.com","UserEmail",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    INPUT("","password","********","UserPassword",()=>{
    });
    BREAK("",()=>{});BREAK("",()=>{});
    BUTTON("","Sign Up",(DATA)=>{
        BACKGROUND(DATA,"forestgreen");
        CLICK(DATA,()=>{
            TOASTEDMESSAGE(sessionStorage.getItem("UserName"),"Enter User Name",()=>{
                TOASTEDMESSAGE(sessionStorage.getItem("UserEmail"),"Enter User Email",()=>{
                    TOASTEDMESSAGE(sessionStorage.getItem("UserPassword"),"Enter User Password",()=>{
                        CREATEAUTH(MOVIELANDERAPI,"User","WELCOME TO MOVIE LANDER");
                    },()=>{
                        MOVIELANDERWELCOMEEMAIL();
                    });
                },()=>{
                    MOVIELANDERWELCOMEEMAIL();
                });
            },()=>{
               MOVIELANDERWELCOMEEMAIL(); 
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