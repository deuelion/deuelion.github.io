export const MONTHSTIME = (DATE,CALLBACK) => {
    const now = new Date();
    const date = new Date(DATE);
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(now.getMonth() - 1);
    const isValid = date >= oneMonthAgo && date <= now;
    if (typeof callback === "function") {
        CALLBACK(isValid);
    } else {
        console.log("Provided callback is not a function.");
    };
};