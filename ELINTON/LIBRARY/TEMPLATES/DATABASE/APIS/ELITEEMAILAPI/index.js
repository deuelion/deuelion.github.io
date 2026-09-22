let ELITEMAILAPI;
if (localStorage.getItem("Native")) {
    ELITEMAILAPI=" 'https://script.google.com/macros/s/AKfycbyv-q-nCrTPIftFWX_7FnOhrBCa6IYGr_yjETNiRO1BgcxeTKJZJZbcvjKISwAHuiL3bw/exec' ";
} else {
    ELITEMAILAPI="https://script.google.com/macros/s/AKfycbyv-q-nCrTPIftFWX_7FnOhrBCa6IYGr_yjETNiRO1BgcxeTKJZJZbcvjKISwAHuiL3bw/exec";
};
export{ELITEMAILAPI};