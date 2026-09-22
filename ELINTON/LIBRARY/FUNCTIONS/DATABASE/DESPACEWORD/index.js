export const DESPACEDWORDS = (TEXT,CALLBACK) => {
    const originalWord = TEXT.split("%20").join(" ");
    CALLBACK(originalWord);
};