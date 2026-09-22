export const LOWWERIZED=(TEXTS,CALLBACK)=>{
    const capitalized = TEXTS.toUpprCase();
    CHECK(typeof TEXTS !== 'string',()=>{
        console.log("Input must be a string");
    });
    CONDITION(typeof CALLBACK === 'function',()=>{
        CALLBACK(capitalized);
    },()=>{
        console.log("Callback is not a function");
    });
};