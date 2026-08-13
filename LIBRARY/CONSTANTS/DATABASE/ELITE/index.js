let ELITEDATABASELINK;
if (localStorage.getItem("Native")) {
    ELITEDATABASELINK = "'https://docs.google.com/spreadsheets/d/1JDkBN6KXtT7TNn9-S1WTfV66TjJAmdOuid_1zTxMeq4/edit?usp=sharing'";
} else {
    ELITEDATABASELINK = "https://docs.google.com/spreadsheets/d/1JDkBN6KXtT7TNn9-S1WTfV66TjJAmdOuid_1zTxMeq4/edit?usp=sharing";
};
export { ELITEDATABASELINK };