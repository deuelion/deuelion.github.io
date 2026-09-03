let GOOGLEDRIVEAPI;
if (localStorage.getItem("Native")) {
    GOOGLEDRIVEAPI = "'https://script.google.com/macros/s/AKfycbynmnPfbVqXw3Lrx13ERIB8d97EHnTjYcf_q-eS54govXpwgKe1PhVVung5lqeJCKwv/exec'";
} else {
    GOOGLEDRIVEAPI = "https://script.google.com/macros/s/AKfycbynmnPfbVqXw3Lrx13ERIB8d97EHnTjYcf_q-eS54govXpwgKe1PhVVung5lqeJCKwv/exec";
};
export { GOOGLEDRIVEAPI };