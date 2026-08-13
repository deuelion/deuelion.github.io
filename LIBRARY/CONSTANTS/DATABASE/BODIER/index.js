let BODIER;
if (localStorage.getItem("Native")) {
    BODIER = 'document.querySelector("body")';
} else {
    BODIER = document.querySelector("body");
};
export { BODIER };