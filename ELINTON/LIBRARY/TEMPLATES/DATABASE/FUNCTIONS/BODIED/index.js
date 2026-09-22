export const BODIED=()=>{
    APPSTART();CHECK(localStorage.getItem("Activers") === "True",()=>{FRAMEWORKUSERS();});
    CHECK(localStorage.getItem("FEATURES"),()=>{ROUTED(localStorage.getItem("FEATURES"));});
    const APPRUNNER=()=>{
        CONDITION(localStorage.getItem("Expired"),()=>{
            DISPLAY("",localStorage.getItem("ExpiredMessage"));
        },()=>{
            SCREENWIDTH((Data)=>{
                CONDITION(Data === Number(localStorage.getItem("Screen")),()=>{
                    LOCALSTORE("Screen",Data);
                },()=>{
                    LOCALSTORE("Screen",Data);
                    RELOAD();
                });
            });
            SCREENHEIGHT((Data)=>{
                CONDITION(Data === Number(localStorage.getItem("ScreenHeight")),()=>{
                    LOCALSTORE("ScreenHeight",Data);
                },()=>{
                    LOCALSTORE("ScreenHeight",Data);
                });
            });
            CHECK(!localStorage.getItem("Updates"),()=>{
                ONLINE(()=>{
                    const TITLE = document.title;
                    CONDITION(TITLE === "EliteBuilder",()=>{
                        const script = document.createElement("script");
                        script.type = "module";
                        script.defer=true;
                        script.src = "../../../../../CONNECTION/Direct.js";
                        document.head.appendChild(script);
                    },()=>{
                        const script = document.createElement("script");
                        script.type = "module";
                        script.defer=true;
                        script.src = "https://eliteserving.github.io/CONNECTION/Direct.js";
                        document.head.appendChild(script);
                    });
                });
            });
        });
    };
    CLICK(BODIER,()=>{APPRUNNER();});
    SCROLL(BODIER,()=>{APPRUNNER();});
};