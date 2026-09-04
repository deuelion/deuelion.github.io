export const FINDER = (DATA, ELEMENT, ELEMENT1, TRUE_CALLBACK, FALSE_CALLBACK) => {
    const user = DATA.find((item) => item[ELEMENT] === ELEMENT1);
    CONDITION(user,()=>{
        TRUE_CALLBACK(user);
    },()=>{
        FALSE_CALLBACK(false);
    });
};