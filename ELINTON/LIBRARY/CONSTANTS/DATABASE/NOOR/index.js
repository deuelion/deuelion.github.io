let NOORDATABASELINK;
if (localStorage.getItem("Native")) {
    NOORDATABASELINK = "''";
} else {
    NOORDATABASELINK = "";
};
export { NOORDATABASELINK };