const GETDATAAPI = "https://script.google.com/macros/s/AKfycbwVVCXggozy1TROqhSoKGG0jJ5UKVgGI-IhockoG-veI9wOhqavoYe8sTV4YyC0r2KwKQ/exec";
const IDNUMBER="Elintonx1";
const BODY=document.querySelector("body");
const DATA={
    "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing",
    "sheetName":"ELINTON"
};
const DATAI=`ROUTED(localStorage.getItem("APIS"));
ROUTED(localStorage.getItem("CONSTANTS"));
ROUTED(localStorage.getItem("FUNCTIONS"));
ROUTED(localStorage.getItem("COMPONENTS"));
INJECTCSS(localStorage.getItem("STYLES"))
ROUTED(localStorage.getItem("PROJECTS"));`;
localStorage.setItem("NATIVER",DATAI);
const FINDER = (DATA, ELEMENT, ELEMENT1, TRUE_CALLBACK, FALSE_CALLBACK) => {
    const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);
    if (user) {
        TRUE_CALLBACK(user);
    } else {
        FALSE_CALLBACK();
    };
};
fetch(GETDATAAPI,{
    mode:"cors",
    method:"POST",
    body: JSON.stringify(DATA)
})
.then(res =>res.json())
.then(Data =>{
    FINDER(Data,"ID",IDNUMBER,(User)=>{
        const APIS=User.APIS;
        localStorage.setItem("APIS",APIS);
        const CONSTANTS=User.CONSTANTS;
        localStorage.setItem("CONSTANTS",CONSTANTS);
        const FUNCTIONS=User.FUNCTIONS+User.FUNCTIONSONE+User.FUNCTIONSTWO+User.FUNCTIONSTHREE+User.FUNCTIONSFOUR+User.FUNCTIONSFIVE;
        localStorage.setItem("FUNCTIONS",FUNCTIONS);
        const STYLES=User.STYLES+User.STYLESONE+User.STYLESTWO+User.STYLESTHREE+User.STYLESFOUR+User.STYLESFIVE;
        localStorage.setItem("STYLES",STYLES);
        const COMPONENTS=User.COMPONENTS+User.COMPONENTSONE+User.COMPONENTSTWO+User.COMPONENTSTHREE+User.COMPONENTSFOUR+User.COMPONENTSFIVE;
        localStorage.setItem("COMPONENTS",COMPONENTS);
        if (localStorage.getItem("ENV") === "ANDROID") {
            const DATAONE={
                "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing",
                "sheetName":"ANDROID"
            };
            fetch(GETDATAAPI,{
                mode:"cors",
                method:"POST",
                body: JSON.stringify(DATAONE)
            })
            .then(res =>res.json())
            .then(Datata =>{
                FINDER(Datata,"ID",document.title,(Used)=>{
                    const PROJECT=Used.PAGE+Used.PAGEONE+Used.PAGETWO+Used.PAGETHREE+Used.PAGEFOUR+Used.PAGEFIVE+Used.PAGESIX+Used.PAGESEVEN+Used.PAGEEIGHT+Used.PAGENINE+Used.PAGETEN+Used.PAGEELELEVEN+Used.PAGETWELVE+Used.PAGETHIRTEEN+Used.PAGEFOURTEEN+Used.PAGEFIFTEEN+Used.PAGESIXTEEN+Used.PAGESEVENTEEN+Used.PAGEEIGHTEEN+Used.PAGENINETEEN+Used.PAGETWENTY+Used.PAGETWENTYONE+Used.PAGETWENTYTWO+Used.PAGETWENTYTHREE+Used.PAGETWENTYFOUR;
                    localStorage.setItem("PROJECTS",PROJECT);
                    if (!localStorage.getItem("Native")) {
                        localStorage.setItem("Native",new Date());
                        location.reload();
                    };
                },()=>{
                    BODY.innerHTML=`
                        <br><br>
                        <h1>Project Error</h1>
                        <br>
                        <p>Project Might Have Been Erased</p>
                        <br><br>
                    `;
                });

            })
            .catch(Error =>{console.log(Error)})
        } else {
            if (localStorage.getItem("ENV") === "DESKTOP") {
                const DATAONE={
                    "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing",
                    "sheetName":"DESKTOP"
                };
                fetch(GETDATAAPI,{
                    mode:"cors",
                    method:"POST",
                    body: JSON.stringify(DATAONE)
                })
                .then(res =>res.json())
                .then(Datata =>{
                    FINDER(Datata,"ID",document.title,(Used)=>{
                        const PROJECT=Used.PAGE+Used.PAGEONE+Used.PAGETWO+Used.PAGETHREE+Used.PAGEFOUR+Used.PAGEFIVE+Used.PAGESIX+Used.PAGESEVEN+Used.PAGEEIGHT+Used.PAGENINE+Used.PAGETEN+Used.PAGEELELEVEN+Used.PAGETWELVE+Used.PAGETHIRTEEN+Used.PAGEFOURTEEN+Used.PAGEFIFTEEN+Used.PAGESIXTEEN+Used.PAGESEVENTEEN+Used.PAGEEIGHTEEN+Used.PAGENINETEEN+Used.PAGETWENTY+Used.PAGETWENTYONE+Used.PAGETWENTYTWO+Used.PAGETWENTYTHREE+Used.PAGETWENTYFOUR;
                        localStorage.setItem("PROJECTS",PROJECT);
                        if (!localStorage.getItem("Native")) {
                            localStorage.setItem("Native",new Date());
                            location.reload();
                        };
                    },()=>{
                        BODY.innerHTML=`
                            <br><br>
                            <h1>Project Error</h1>
                            <br>
                            <p>Project Might Have Been Erased</p>
                            <br><br>
                        `;
                    });

                })
                .catch(Error =>{console.log(Error)})
            } else {
                const DATAONE={
                    "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing",
                    "sheetName":"WEB"
                };
                fetch(GETDATAAPI,{
                    mode:"cors",
                    method:"POST",
                    body: JSON.stringify(DATAONE)
                })
                .then(res =>res.json())
                .then(Datata =>{
                    FINDER(Datata,"ID",document.title,(Used)=>{
                        const PROJECT=Used.PAGE+Used.PAGEONE+Used.PAGETWO+Used.PAGETHREE+Used.PAGEFOUR+Used.PAGEFIVE+Used.PAGESIX+Used.PAGESEVEN+Used.PAGEEIGHT+Used.PAGENINE+Used.PAGETEN+Used.PAGEELELEVEN+Used.PAGETWELVE+Used.PAGETHIRTEEN+Used.PAGEFOURTEEN+Used.PAGEFIFTEEN+Used.PAGESIXTEEN+Used.PAGESEVENTEEN+Used.PAGEEIGHTEEN+Used.PAGENINETEEN+Used.PAGETWENTY+Used.PAGETWENTYONE+Used.PAGETWENTYTWO+Used.PAGETWENTYTHREE+Used.PAGETWENTYFOUR;
                        localStorage.setItem("PROJECTS",PROJECT);
                        if (!localStorage.getItem("Native")) {
                            localStorage.setItem("Native",new Date());
                            location.reload();
                        };
                    },()=>{
                        BODY.innerHTML=`
                            <br><br>
                            <h1>Project Error</h1>
                            <br>
                            <p>Project Might Have Been Erased</p>
                            <br><br>
                        `;
                    });

                })
                .catch(Error =>{console.log(Error)})
            };
        };
    },()=>{
        BODY.innerHTML=`
            <br><br>
            <h1>Server Error</h1>
            <br>
            <p>There Was A Problem Connecting To The Server</p>
            <br><br>
        `;
    });
})
.catch(Error =>{console.log(Error)})