let CREATETABLEAPI;
if (localStorage.getItem("Native")) {
    CREATETABLEAPI = "'https://script.google.com/macros/s/AKfycbzS-M9Q2tPzFWyMTc3vmvKwtXG1YCRuQbplcLZxr5XKYmSoKOjFztrHujqGD--VKwGYkQ/exec'";
} else {
    CREATETABLEAPI = "https://script.google.com/macros/s/AKfycbzS-M9Q2tPzFWyMTc3vmvKwtXG1YCRuQbplcLZxr5XKYmSoKOjFztrHujqGD--VKwGYkQ/exec";
};
export { CREATETABLEAPI };