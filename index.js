const GETDATAAPI = "https://script.google.com/macros/s/AKfycbwVVCXggozy1TROqhSoKGG0jJ5UKVgGI-IhockoG-veI9wOhqavoYe8sTV4YyC0r2KwKQ/exec";
const IDNUMBER="ElintonX1"
const DATA={
    "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing",
    "sheetName":"ELINTON",
};
const BODY=document.querySelector("body");
const NATIVEDATA=`ROUTED(localStorage.getItem("API"));
ROUTED(localStorage.getItem("STYLES"));
ROUTED(localStorage.getItem("COMPONENTS"));
ROUTED(localStorage.getItem("FUNCTIONS"));
INJECTCSS(localStorage.getItem("STYLES"));
ROUTED(localStorage.getItem("PROJECTSGENERAL"));
ROUTED(localStorage.getItem("PROJECTS"));
`;
fetch(GETDATAAPI,{
    mode:"cors",
    method:"POST",
    body: JSON.stringify(DATA)
})
.then(res =>res.json())
.then(Data =>{
    const user = Data.find((item) => item.ID === IDNUMBER);
    if (user&&user.ACCESS) {
        const FUNCTIONS=user.FUNCTIONS+user.FUNCTIONSONE+user.FUNCTIONSTWO+user.FUNCTIONSTHREE+user.FUNCTIONSFOUR+user.FUNCTIONSFIVE;
        localStorage.setItem("FUNCTIONS",FUNCTIONS);
        const STYLES=user.STYLES+user.STYLESONE+user.STYLESTWO+user.STYLESTHREE+user.STYLESFOUR+user.STYLESFIVE;
        localStorage.setItem("STYLES",STYLES);
        const COMPONENTS=user.COMPONENTS+user.COMPONENTSONE+user.COMPONENTSTWO+user.COMPONENTSTHREE+user.COMPONENTSFOUR+user.COMPONENTSFIVE;
        localStorage.setItem("COMPONENTS",COMPONENTS);
        const APIS=user.APIS;
        localStorage.setItem("APIS",APIS);
    const DATA2={
        "spreadsheetUrl":"https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing",
        "sheetName":"PROJECTS",
    };
    fetch(GETDATAAPI,{
        mode:"cors",
        method:"POST",
        body: JSON.stringify(DATA2)
    })
    .then(res =>res.json())
    .then(Datata =>{
        const users = Datata.find((item) => item.NAME === document.title);
        if (users && users.ACCESS) {
            if (localStorage.getItem("ENV") === "ANDROID") {
                const PROJECTS=users.ANDROID+users.ANDROIDONE+users.ANDROIDTWO+users.ANDROIDTHREE+users.ANDROIDFOUR+users.ANDROIDFIVE;
                localStorage.setItem("PROJECTS",PROJECTS);
                localStorage.setItem("NATIVER",NATIVEDATA);
                if (!localStorage.getItem("Native")) {
                    localStorage.setItem("Native",Date.now());
                    location.reload();
                };
            } else {
                if (localStorage.getItem("ENV") === "DESKTOP") {
                    const PROJECTS=users.DESKTOP+users.DESKTOPONE+users.DESKTOPTWO+users.DESKTOPTHREE+users.DESKTOPFOUR+users.DESKTOPFIVE;
                    localStorage.setItem("PROJECTS",PROJECTS);
                    localStorage.setItem("NATIVER",NATIVEDATA);
                    if (!localStorage.getItem("Native")) {
                        localStorage.setItem("Native",Date.now());
                        location.reload();
                    };
                } else {
                        const PROJECTS=users.PAGES+users.PAGESONE+users.PAGESTWO+users.PAGESTHREE+users.PAGESFOUR+users.PAGESFIVE;
                        localStorage.setItem("PROJECTS",PROJECTS);
                        localStorage.setItem("NATIVER",NATIVEDATA);
                        if (!localStorage.getItem("Native")) {
                            localStorage.setItem("Native",Date.now());
                            location.reload();
                        };
                    };
                };
        const PROJECTSGENERAL=users.GENERAL+users.GENERALONE+users.GENERALTWO;
        localStorage.setItem("PROJECTSGENERAL",PROJECTSGENERAL);
    } else {
        BODY.innerHTML=`
            <h1>PROJECT WAS DISCONTINUED</h1>
        `;
        };
    })
    .catch(Error =>{console.log(Error)})
    } else {
        BODY.innerHTML=`
            <h1>CONNECTION ERROR TO SERVER</h1>
        `;
    };   
})
.catch(Error =>{console.log(Error)})