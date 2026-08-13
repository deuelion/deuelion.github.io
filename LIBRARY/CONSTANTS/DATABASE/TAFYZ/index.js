let TAFYZDATABASELINK;
if (localStorage.getItem("Native")) {
    TAFYZDATABASELINK = "''";
} else {
    TAFYZDATABASELINK = "";
};
export { TAFYZDATABASELINK };