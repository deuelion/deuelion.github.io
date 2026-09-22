let MAINCONNECTIONAPI;
if (localStorage.getItem("Native")) {
    MAINCONNECTIONAPI = "'https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing'";
} else {
    MAINCONNECTIONAPI = "https://docs.google.com/spreadsheets/d/16LFihiUWEqvV5Np064F1MVQiNf9f4d12FPbiRUT73-4/edit?usp=sharing";
};
export { MAINCONNECTIONAPI };