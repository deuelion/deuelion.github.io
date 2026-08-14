let COMPANYDATABASELINK;
if (localStorage.getItem("Native")) {
    COMPANYDATABASELINK = "'htps://eroxians.github.io'";
} else {
    COMPANYDATABASELINK = "htps://eroxians.github.io";
};
export { COMPANYDATABASELINK };