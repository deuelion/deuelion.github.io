export const SPACEDWORDS=(TEXT,CALLBACK)=>{
    const newWord = TEXT.split(" ").join("%20");
    CALLBACK(newWord);
};