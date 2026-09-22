let SENDEMAILAPI;
if (localStorage.getItem("Native")) {
    SENDEMAILAPI = "'https://script.google.com/macros/s/AKfycbx2-oCEumSM5TAoWQ8quDsCIOmJo-4U3RSi0rd5mzAdT0HdOTbRDgmscFA5qIiFNo7S_g/exec'";
} else {
    SENDEMAILAPI = "https://script.google.com/macros/s/AKfycbx2-oCEumSM5TAoWQ8quDsCIOmJo-4U3RSi0rd5mzAdT0HdOTbRDgmscFA5qIiFNo7S_g/exec";
};
export { SENDEMAILAPI };