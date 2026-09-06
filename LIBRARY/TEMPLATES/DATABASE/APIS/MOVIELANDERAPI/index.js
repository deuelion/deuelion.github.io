let MOVIELANDERAPI;
if (localStorage.getItem("Native")) {
    MOVIELANDERAPI=" 'https://docs.google.com/spreadsheets/d/1F3x65HcvW6rYnXcivjkMGFAEaNz1FpkhWEemTpRp9G0/edit?usp=sharing' ";
} else {
    MOVIELANDERAPI="https://docs.google.com/spreadsheets/d/1F3x65HcvW6rYnXcivjkMGFAEaNz1FpkhWEemTpRp9G0/edit?usp=sharing";
};
export{MOVIELANDERAPI};