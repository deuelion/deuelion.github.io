const NAME=sessionStorage.getItem("DevName");
const DEV=localStorage.getItem("ENV");
const CURRENT=MOVIELANDERANDROIDROUTER;
const WEBSWITCHER=()=>{
    switch (NAME) {
        case "M1":ELITEROBUSTONTOLOGYWEBROUTER();
            break;
        case "M2":EROXIANWEBROUTES();
            break;
        case "M3":SHYRAJANDROIDROUTER();
            break;
        case "M4":MOVIELANDERANDROIDROUTER();
            break;
        default:DEVMODE();
            break;
    };
};
const ANDROIDSWITCHER=()=>{
    switch (NAME) {
        case "M1":ELITEROBUSTONTOLOGYWEBROUTER();
            break;
        case "M2":EROXIANWEBROUTES();
            break;
        case "M3":SHYRAJANDROIDROUTER();
            break;
        case "M4":MOVIELANDERANDROIDROUTER();
            break;
        default:DEVMODE();
            break;
    };
};
const DESKTOPSWITCHER=()=>{
    switch (NAME) {
        case "M1":ELITEROBUSTONTOLOGYWEBROUTER();
            break;
        case "M2":EROXIANWEBROUTES();
            break;
        case "M3":SHYRAJANDROIDROUTER();
            break;
        case "M4":MOVIELANDERANDROIDROUTER();
            break;
        default:DEVMODE();
            break;
    };
};
const  DEVMODE=()=>{
    DISPLAY("",`
        <br><br>
        <h1>COMPANY SERVER</h1>
        <br>
        <p>Access To Your Server</p>
        <br>
        <input id="Name" type="text" placeholder="Server Name" />
        <br><br>
        <button id="Access">Access</button>
        <br><br>
        <p class="Owner">Elinton@2026</p>
    `);
    const XSS=`
        #Name{
            width:90%;
            height:32px;
            border-radius:5px;
            border:1px solid #cdcdcd80;
            color:orange;
            background:transparent;
        }
        #Access{
            width:90%;
            height:50px;
            border-radius:5px;
            border:none;
            color:white;
            background:green;
        }
        .Owner{
            position:absolute;
            bottom:30px;
            width:95%;
            left:2.5%;
        }
    `;
    INJECTCSS(XSS);
    const Name=document.querySelector("#Name");
    Name.addEventListener("input",()=>{
        CONDITION(Name.value,()=>{
            SESSIONSTORE("DevName",Name.value);
        },()=>{
            SESSIONDELETE("DevName");
        });
    });
    const Access=document.querySelector("#Access");
    Access.addEventListener("click",()=>{
        CONDITION(Name.value,()=>{
            BORDER(Name,"green");
            RELOAD();
        },()=>{
           BORDER(Name,"red");
        });
    });
};
const DEVPROTECTION=()=>{
    switch (DEV) {
        case "ANDROID":ANDROIDSWITCHER();
            break;
        case "WEB":WEBSWITCHER();
            break;
        case "DESKTOP":DESKTOPSWITCHER();
            break;
        default:DEVMODE();
            break;
    };
};
if (!sessionStorage.getItem("DevName")) {
    const LOADDATA={
        natasha:() => {CURRENT();},
    };
    LINKTRACKER(LOADDATA,()=>{
        DEVMODE();
    });
}else{
    DEVPROTECTION();
};