let CREATEDATABASEAPI;
if (localStorage.getItem("Native")) {
    CREATEDATABASEAPI = "'https://script.google.com/macros/s/AKfycbzzV6EHb-mFnFm_lS3p5CEKTzMjGVr1bl9mEEbOMm1-t7YvEwWWG2IxKph_OGUppxrH/exec'";
} else {
    CREATEDATABASEAPI = "https://script.google.com/macros/s/AKfycbzzV6EHb-mFnFm_lS3p5CEKTzMjGVr1bl9mEEbOMm1-t7YvEwWWG2IxKph_OGUppxrH/exec";
};
export { CREATEDATABASEAPI };