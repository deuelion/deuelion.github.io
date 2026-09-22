let INSERTDATAAPI;
if (localStorage.getItem("Native")) {
    INSERTDATAAPI = "'https://script.google.com/macros/s/AKfycbzENDLW1MWLgUPsed5wC13xhRl0s8B1CoXXR36XOTg9ulbULBzB81nzq0NG2Y1alBYuUA/exec'";
} else {
    INSERTDATAAPI = "https://script.google.com/macros/s/AKfycbzENDLW1MWLgUPsed5wC13xhRl0s8B1CoXXR36XOTg9ulbULBzB81nzq0NG2Y1alBYuUA/exec";
};
export { INSERTDATAAPI };