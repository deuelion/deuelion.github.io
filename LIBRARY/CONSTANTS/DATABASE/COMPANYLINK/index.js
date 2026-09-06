let COMPANYDATABASELINK;
if (localStorage.getItem("Native")) {
    COMPANYDATABASELINK = "'htps://eliterobustontology.github.io'";
} else {
    COMPANYDATABASELINK = "htps://eliterobustontology.github.io";
};
export { COMPANYDATABASELINK };